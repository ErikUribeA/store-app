interface ILabelProps {
    text: string; // El texto que se mostrará en la etiqueta
    htmlFor?: string; // Asocia el label con un input mediante el id
    className?: string; // Clases adicionales para personalizar estilos
}

// Componente Label funcional
const Label: React.FC<ILabelProps> = ({ text, htmlFor, className }) => {
    return (
        <label htmlFor={htmlFor} className={className}>
            {text}
        </label>
    );
};

export default Label;