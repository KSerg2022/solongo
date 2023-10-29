import React, {useState} from 'react';
import MyInput from "./UI/MyInput/MyInput";
import MyButton from "./UI/MyButton/MyButton";

const FormQtyPok = ({qty, setQty, setModal}) => {
    const [qtyUpdate, setQtyUpdate] = useState(qty)

    const update = (e) => {
        e.preventDefault()
        setQty(qtyUpdate)
        setModal(false)
    }

    return (
        <form>
            <MyInput
                value={qtyUpdate}
                onChange={e => setQtyUpdate(e.target.value)}
                type="number"
                placeholder="Quantity pokemons?"
                min="0"
            />
            <MyButton
                id="modalInputKey"
                title="Input"
                onClick={update}
            />
        </form>
    )
};

export default FormQtyPok;