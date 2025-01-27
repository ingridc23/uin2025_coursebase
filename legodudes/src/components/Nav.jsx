import NavItem from "../NavItem"

export default function Nav(){
    const categories = [
        {id:1,
            name: "City"
        },
        {
            id:2,
            name: "Ninjago"
        }, 
            {id: 5,
            name: "Castles and Knights"
        },
            {id: 6,
            name: "Marine and Pirates"
        },       {id: 7,
            name: "Movie Characters"
        },
    ]
    return(

        <nav>
            <ul>
                {categories.map((categoy) => ( <NavItem categoy= {categoy.name} key={categoy.id} />
                ))}
            </ul>
        </nav>
        // <ul>
        //     <li><a href="#">City</a></li>
        //     <li><a href="#">Ninjago</a></li>
        //     <li><a href="#">Castles and Knights</a></li>
        //     <li><a href="#">Marine and Pirates</a></li>
        //     <li><a href="#">Movie Characters</a></li>
        // </ul>
    )
}