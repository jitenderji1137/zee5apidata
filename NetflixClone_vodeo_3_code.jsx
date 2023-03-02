import { Input , Button , Select , Textarea , ButtonGroup , Link , Center , Heading} from "@chakra-ui/react";
import { useRef } from "react"
import swal from 'sweetalert';
import axios from "axios"
export default function MyForm() {
  document.title = "Online Store :- Add Products ..."
  const formRef = useRef(null);
    const handleSubmit = (e) => {
      e.preventDefault();
      const form = e.target;
      swal("Processing...!", {
        buttons: false,
      });
      const formdata = {
      "Title": form.Title.value,
      "Image": form.Image.value,
      "MainCategory": form.MainCategory.value,
      "Geans": form.Geans.value,
      "FileID": form.FileID.value
      }
       axios.post("You API end point ...",formdata)
        .then(response => {
          swal("Video Added to Site...!", "Click Ok to Continue ...!", "success");
          formRef.current.reset();
        })
        .catch(error => console.error('Error!'));
    }
    
    return (
      <>
      <Center><Heading color="red" m="50px">Free NetFlix</Heading></Center>
        <div style={{maxWidth:"500px",margin:"auto"}}>
      <form name="submit-to-google-sheet" onSubmit={handleSubmit} className="Form" ref={formRef}>
        <Textarea name="Title" type="text" placeholder="Title of Video ..." required m="10px" />
        <Input name="Image" type="text" placeholder="Image of Video ..." m="10px"  required />
        <Textarea name="FileID" type="text" placeholder="File ID..." m="10px"  required />
        <Select name="MainCategory" m="10px"  placeholder='Select MainCategory ...' required>
          <option value='Movies'>Movies</option>
          <option value='WebSeries'>Web Series</option>
          <option value='Adult'>Adult</option>
        </Select>
        <Select name="Geans" m="10px"  placeholder='Select Geans ...' required>
          <option value='Romantic'>Romantic</option>
          <option value='Action'>Action</option>
          <option value='Adventure'>Adventure</option>
          <option value='Comedy'>Comedy</option>
          <option value='Crime'>Crime</option>
          <option value='Drama'>Drama</option>
          <option value='Horror'>Horror</option>
          <option value='Thriller'>Thriller</option>
          <option value='War'>War</option>
          <option value='Uncut'>Uncut</option>
          <option value='Ullu'>Ullu</option>
          <option value='Kooku'>Kooku</option>
          <option value='Fliz'>Fliz</option>
          <option value='Hotmasti'>Hotmasti</option>
          <option value='Primeflix'>Primeflix</option>
          <option value='MastiPrime'>MastiPrime</option>
          <option value='HotPrime'>HotPrime</option>
          <option value='WorldPrime'>WorldPrime</option>
        </Select>
        <ButtonGroup style={{display:"flex",justifyContent:"space-between"}}>
           <Link href = "https://netflix-api-for-project.onrender.com/" isExternal><Button>Check</Button></Link>
           <Button type="submit">Add to Site ... </Button>
        </ButtonGroup>
      </form>
      </div>
      </>
    );
  }

