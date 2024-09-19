/**
 * BulletPoint component renders a bullet point with a title, body, and an optional link.
 *
 * @param {Object} props - The properties object.
 * @param {string} props.title - The title of the bullet point.
 * @param {string} props.body - The body text of the bullet point.
 * @param {string} [props.link] - The URL for the optional link.
 * @param {string} [props.linkText] - The text for the optional link.
 * @returns {JSX.Element} The rendered BulletPoint component.
 */
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