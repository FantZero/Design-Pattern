import { Builder } from "./Builder";
import { House } from "./House";

export class HouseBuildDirector {
    private builder: Builder;

    setBuilder(builder: Builder){
        this.builder = builder;
    }

    buildHouse(): House{
        return this.builder.build();
    }
}