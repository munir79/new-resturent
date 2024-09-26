import { useEffect, useState } from "react";
import SectionTittle from "../../SectionTittle/SectionTittle";
import MenuItem from "../../Shared/MenuItem";


const PopularMenu = () => {
    const [menu, setMenu] = useState([]);
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.category === 'popular');
                setMenu(popularItems)
            })
    }, [])
    return (
        <div>
           <SectionTittle heading={"Popular Menu"} subHeading={"from our menu"}></SectionTittle> 
           <div className="grid md:grid-cols-2 gap-10">
                {
                    menu.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
        </div>
    );
};

export default PopularMenu;