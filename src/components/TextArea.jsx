const TextArea = ({nameLabel, name}) => (
    <div className="bg-field rounded-3" style={{height: "127px"}}>
        <textarea 
            className="text-field" 
            rows="3"
            placeholder={nameLabel}
            name={name} 
            id={name}
            style={{resize: "none"}} 
        />
        <label htmlFor={name} className="text-label">{ nameLabel }</label>
    </div>
)

export default TextArea;