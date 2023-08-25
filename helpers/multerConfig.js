import multer from 'multer';
import  path from 'path';

const storageSingle=multer.diskStorage(
    {
        destination:(req,file,cb)=>
        {
          cb(null, 'uploads');
        },
        filename:(req,file,cb)=>
        {
            console.log(req.body)
            cb(null,req.body.aspirantId+"-tema.pdf");
        }
    });
    const storageProposalTaller=multer.diskStorage(
        {
            destination:(req,file,cb)=>
            {
              cb(null, 'uploads/proposalTaller');
            },
            filename:(req,file,cb)=>
            {
                console.log(req.body)
                cb(null,req.body.aspirantId+req.body.doctorId+req.body.tallerId);
            }
        });

    
    const storageMultiple=multer.diskStorage(
        {
            destination:(req,file,cb)=>
            {
              cb(null, 'uploads');
            },
            filename:(req,file,cb)=>
            {
                cb(null,req.body.aspirantId+file.originalname);
            }
        });

const fileFilter=(req,file,cb)=>
{
    if(file.mimetype==='application/pdf' || file.mimetype==='application/pdf')
    {
        console.log(true)
        cb(null, true);
    }
    else
    {
        console.log(false)
        cb(null, false);
    }
};
export const uploadTallerProposal=multer({storage:storageProposalTaller, fileFilter:fileFilter})
export const uploadSingle=multer({storage:storageSingle, fileFilter:fileFilter})
export const uploadMultiple=multer({storage:storageMultiple, fileFilter:fileFilter})

