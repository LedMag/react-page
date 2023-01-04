export const postFile = async (file: ArrayBuffer, name: string, ext: string, id: string) => {
    const url = `http://localhost:9000/api/product/uploadFile?id=${id}&name=${name}&ext=${ext}`;
    return fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/octet-stream",
            "Content-Disposition": `attachment; filename="image.${ext}"`,
            // 'Content-Lenght': `${size}`
        },
        body: file
    })
}

export const uploadFile = (file: File, id: string, name: string) => {
    const ext = file.name.split('.').pop() ?? 'png';
    const rf = new FileReader();

    rf.onload = async function (data) {
        // const size = data.total;
        // const type = data.type;
        console.log('type', ext);
        
        await postFile(rf.result as ArrayBuffer, name, ext, id)
    }
    rf.readAsArrayBuffer(file);
    rf.onloadend = function () {
        console.log('Done!')
    }
}