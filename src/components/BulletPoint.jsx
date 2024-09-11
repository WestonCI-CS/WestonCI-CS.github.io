export default function BulletPoint({ title, body, link, linkText }) {
    //Wrap this function in a div called "bullet-points"
    return (
        <div className="point">
            <h3 className="tetiary-title">{title}</h3>
            <h4 className="point-body">{body}</h4>
            <a className="link" href={link}>
                {linkText}<span> →</span>
            </a>
        </div>
    );
};