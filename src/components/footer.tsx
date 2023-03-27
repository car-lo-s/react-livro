
export const Footer=()=>{
    const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

    return <footer>
        <p> {`${year}`} Carlos R.</p>
    </footer>
}