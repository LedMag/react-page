export const postFile = async (file: ArrayBuffer, name: string, ext: string, id: string) => {
    const token = document.cookie.split('=')[1];
    const url = `${process.env.REACT_APP_API_URL}/product/uploadFile?id=${id}&name=${name}&ext=${ext}`;
    return fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/octet-stream",
            "Content-Disposition": `attachment; filename="image.${ext}"`,
            "Authorization": `Bearer ${token}`,
            // 'Content-Lenght': `${size}`
        },
        body: file
    })
}

export const uploadFile = (file: File, id: string, name: string) => {
    const ext = file.name.split('.').pop() ?? 'png';
    const rf = new FileReader();

    rf.onload = async function (data) {
        await postFile(rf.result as ArrayBuffer, name, ext, id)
    }
    rf.readAsArrayBuffer(file);
    rf.onloadend = function () {
        console.log('Done!')
    }
}