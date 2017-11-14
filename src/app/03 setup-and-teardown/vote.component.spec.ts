import {VoteComponent} from './vote.component';

describe('VoteComponet',()=>{
    let component:VoteComponent;
    beforeEach(()=>{
        component=new VoteComponent();
    })
    it('should increment when it is upvote',()=>{
       
        component.upVote();
        expect(component.totalVotes).toBe(1);
    })
    it('should increment when it is downVote',()=>{
        
        component.downVote();
        expect(component.totalVotes).toBe(-1);
    })
})