// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class Hello extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;
    
    @property (cc.Prefab)       
    bookPrefab: cc.Prefab = null; 


    @property
    text: string = '';

    // LIFE-CYCLE CALLBACKS:

    onLoad () { 
        var game = cc.director.getPhysicsManager();
        game.enabled=true;

        this.label.string = this.text;
        
        this.criaPersona();
    }

    criaPersona () {
        var newBook = cc.instantiate(this.bookPrefab);
        newBook.setPosition(0,300);
        this.node.addChild(newBook);
    }

    // update (dt) {}
}
