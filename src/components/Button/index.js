import myAlert from '~/myAlert';

function Button() {
    return (
        <button onClick={myAlert} className="button">Click me</button>
    );
}

export default Button;