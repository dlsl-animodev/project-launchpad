interface DashboardProps {
    id : string;
}
const Dashboard : React.FC<DashboardProps> = async ({
    id,
}) => {
    // Simulate an await
    await new Promise(resolve => setTimeout(resolve, 1000));

    // assume this data comes from an API
    const data = {
        id,
    }

    return (
        <div>
            <h1>Dashboard for Day {id}</h1>
            <pre> {JSON.stringify(data, null, 2)} </pre>
        </div>
    )
};

export default Dashboard;