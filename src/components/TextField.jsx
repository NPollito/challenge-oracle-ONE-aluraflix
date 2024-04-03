const TextField = ({type = "text", nameLabel, name}) => (

    <div className="bg-field rounded-3" style={{height: "58px"}}>
        <input 
            type={type}
            className="text-field" 
            placeholder={nameLabel} 
            id={name} 
            name={name}
        />
        <label htmlFor={name} className="text-label">{ nameLabel }</label>
    </div>
)

export default TextField;