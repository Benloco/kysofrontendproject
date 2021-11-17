
export default function Loading(props) {
    return (
        <div>
            <div className="col-12" style={{ marginLeft: '34%' }}>
            <div className="spinner-border text-primary" role="status">
                <span className="sr-only"></span>
                </div>
                <p>{props.title} . . .</p>
            </div>
        </div>

    );
};