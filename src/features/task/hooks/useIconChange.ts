import { useState } from "react";
import { useToggle } from "../../common/hooks/useToggle";

// Recoil로 대체 / customHook으로 사용할시 AddTask에서 사용.
type returnType =[
    string, boolean,() => void, (iconName:string) => void
]

export function useIconChange(firstIconName?:string ):returnType{

    const [showIcon, setShowIcon] = useToggle();
    const [iconName, setIconName] = useState(firstIconName || 'GiPencilBrush');

    const changeIcon = (changeIconName :string )=>{
        setIconName(changeIconName)
        setShowIcon();
    }

    return [iconName,showIcon,setShowIcon,changeIcon]
}