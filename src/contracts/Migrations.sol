pragma solidity >= 0.4.22 <0.9.0;

contract Migrations{
    address public owner = msg.sender;
    uint public last_completed_migration;

    modifier restricted(){
        require(
            msg.sender == owner,
            "this fnc is restricted to the contract's owner"
        );
        _; //this says continue

    }

    function setCompleted(uint completed ) public restricted {
        last_completed_migration = completed;
    }
    function upgrade(address new_address) public restricted{
        Migrations upgraded = Migrations(new_address); //Migrations being the contract acts as a data type here for building another one with the upgraded address
        upgraded.setCompleted(last_completed_migration);
    }
}