#!/usr/bin/node

class node {

    constructor(val){
        this.val = val;
        this.next = null
    }   



}

class linkedList {
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }

    append(val){
        let node1 = new node(val);
        if(!this.head){
            this.head = node1
            this.tail = this.head
        } else{
            this.tail.next = node1
            this.tail = node1
        }
        this.length++
        return this
    }
    prepend(val){
        let node1 = new node(val);
        if(!this.head){
            this.head = node1
            this.tail = this.head
        } else{
            node1.next = this.head
            this.head = node1            
        }
        this.length++
        return this
    }
    at(index){
        if(!this.head){
            console.log('List is empty')
        } else if(index === 0){
            return this.head
        } else {
            let cindex = this.head
            for(let i = 1; i <= index; i++){
                cindex = cindex.next
            }
            return cindex
        }
    }
    pop(){
        if(!this.tail){
            console.log('list is empty')
        } else {
            this.tail = this.at(this.length-2)
            this.tail.next = null
            this.length--
            return this
        }
    }
    contains(val){
        if(!this.head){
            return false
        } else {
            let cVal = this.head
            let result
            while(cVal != null && result != true){
                if(cVal.val === val){
                    result = true
                } else {
                cVal = cVal.next
                result = false
            }            
        }
        return result
        }
    }
    find(val){
        if(!this.head){
            return 'List is empty'
        } else {
            let cVal = this.head
            let index = 0
            let result
            while(cVal != null && result != true){
                if(cVal.val === val){
                    result = true
                } else {
                cVal = cVal.next
                result = false
                index++
            }            
        }
        return index
        }
    }
    toString() {
        if(!this.head){
            return 'List is empty'
        } else {
            let cVal = this.head
            let nodeString = ''
            while(cVal != null){
                if(cVal.next == null){
                    nodeString += `( cVal.val )`
                    cVal = cVal.next   
                } else {
                nodeString += `( ${cVal.val} ) => `
                cVal = cVal.next                 
                }
                       
            }
            return nodeString
        }
    }

}



let linkedList1 = new linkedList();

linkedList1.append('1')
linkedList1.append('2')
linkedList1.append('3')
linkedList1.prepend('0')
linkedList1.append('2')
linkedList1.append('2')
linkedList1.append('3')
linkedList1.prepend('0')
linkedList1.append('3')
linkedList1.prepend('0')
linkedList1.append('newlastitem')
linkedList1.append('popthis')
let lastItem = linkedList1.length
let index = linkedList1.find('newlastitem')
console.log(linkedList1.toString())
// console.log(linkedList1.pop())