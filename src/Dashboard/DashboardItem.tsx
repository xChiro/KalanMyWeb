interface DashbpardItemProps {
    className: string;
    body: any;
}

function DashboardItem(props: DashbpardItemProps) {
    return (
        <div className={'card ' + props.className}>
            <div className={'card-body'}>
                <h5 style={{textAlign: "left", padding: "1vh 0 0 1vw", marginBottom: "2vh", fontSize: "1em"}}>
                    Categories
                </h5>
                {props.body}
            </div>
        </div>
    );
}

export default DashboardItem;