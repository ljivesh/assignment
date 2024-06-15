'use client';

import { useState } from "react";






const VariantBox = ()=> {


    const [colors, setColors] = useState(['red', 'blue']);
    const [addColorDialog, setAddColorDialog] = useState(false);
    


    const [sizes, setSizes] = useState(['small', 'medium']);
    const [addSizeDialog, setSizeDialog] = useState(false);


    return <div className="w-full flex flex-col gap-4 p-4 border border-gray-500">
        <p className="text-xl font-semibold">Variants</p>
        <div className="flex flex-col gap-2">
            <p className="text-xl uppercase font-semibold">Color</p>
            <div className="flex gap-4">

            {colors.map((color)=> <div className="flex gap-2 w-28 items-center p-1 font-semibold rounded bg-gray-200 border border-gray-500"> 
                <div className="h-8 w-8" style={{backgroundColor: color}} />
                <p >{color}</p>
            </div>)}
            <button className="font-semibold">Add Color</button>
            </div>
        </div>
        <div className="flex flex-col gap-2">
            <p className="text-xl uppercase font-semibold">Size</p>
            <div className="flex gap-4">

            {sizes.map((size)=> <div className="flex gap-2 w-28 items-center p-1 flex justify-center font-semibold rounded bg-gray-200 border border-gray-500"> 
                <p className="text-center">{size}</p>
            </div>)}
            <button className="font-semibold">Add Size</button>
            </div>
        </div>
    </div>
};


export default VariantBox;