type PageProps = {
    params: Promise<{
        id: string;
        action: string;
    }>;
};

export default async function ModifyPost({ params }: PageProps) {
    const { id, action } = await params;

    if (action !== "update") {
        return <h1>404 – Page Not Found</h1>;
    }

    return (
        <div>
            <h1>Update Item</h1>
            <p>ID: {id}</p>
        </div>
    );
}
