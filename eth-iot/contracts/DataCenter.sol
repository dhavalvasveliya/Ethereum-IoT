pragma solidity ^0.5.0;



contract DataCenter {

    address payable admin;    
    uint public storeddata1;
    uint public storeddata2;
    address payable node1;
    address payable node2;

    constructor () public {
        admin = msg.sender;        
        node1= 0xdAf55D7ec093aFBaCFA5025BEf59b3fE30C7D7a8;
        node2= 0x97ad9C3b70d3C14Bc107Bf0e96A13CCF5c8A1b0f;
        storeddata1= 153;
        storeddata2= 208;
    }

    function set1(uint x) public{
        require(msg.sender == node1);
    storeddata1 = x;
    }
    function get1() public view returns(uint){
    return storeddata1;
    }


    function set2(uint x) public{
        require(msg.sender == node2);
    storeddata2 = x;
    }
    function get2() public view returns(uint){
    return storeddata2;
    }

    }
