import { Component, useState } from "react";
import TeamComponent from "../teams";

interface Props{
    button: () => void;
    id: number;
    position: number;
    team_shield_url: string;
    team_name: string;
    team_points: number; 
    victories:number;
    ties:number;
    defeats:number;

}

export default class TeamDetails extends Component <Props>{

    render(){
        const [details, setDetails] = useState<TeamComponent[]>([])

        return(
            

        )
    }
}




    




    
