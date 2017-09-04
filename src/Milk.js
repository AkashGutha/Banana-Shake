import LiquidEdible from './LiquidEdible';

export default class Milk extends LiquidEdible{
    constructor(quality){
        super()
        this.quality = quality;
    }
}