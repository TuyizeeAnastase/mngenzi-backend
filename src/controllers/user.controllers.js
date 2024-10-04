import { registerUser } from "../services/user.services";
import bcrypt,{hash} from 'bcryptjs'
import { getToken } from "../util/token";

export class userControllers{
    async registeringUser(req,res){
        try{
            const {name,password,confirm_password,email}=req.body
            if(password != confirm_password){
              return res.status(400).json({
                message:"Password and confirm password are different",
              })
            }
            const hashedPassword=await bcrypt.hash(password,12);
            
            const user={
                name,
                email,
                role_id:2,
                password:hashedPassword
            }
            const newUser=await registerUser(user)
            return res.status(201).json({
                message:'User created successfully',
                newUser
            })
        }catch(error){
            return res.status(500).json({
                message: "Unable to register, try again",
                error: error.message,
              });
        }
    }

    async login(req,res){
        try{
            const {password}=req.body
            const user=req.user
            if(!bcrypt.compareSync(password,user.password)){
                return res.status(401).json({
                    message:'Password does not match'
                })
            }
            const token=getToken({id:user.id,role:user.role.title});
            return res.status(200).json({
                token:token,
                user
            })
        }catch(error){
            return res.status(500).json({
                message:'Unable to login, try again',
                error:error.message0
         })
        }
    }
}


const userController=new userControllers;
export default userController;