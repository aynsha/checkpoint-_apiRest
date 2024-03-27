const User = require('../Models/User.js');

//Fonction requête pour créer un utilisateur
const addUser= async (req, res)=>{
const {name, email, phone}= req.body

  try{
    const user= await User.create({
    name,
    email,
    phone
  }) 
return res.status(200).json({message: 'envoyé', user })
}catch(error){
  console.log(error)
  return res.status(500).json({message: 'error', user})
}
}

//Fonction requête pour créer plusieurs utilisateurs
async function arrayOfPeople(req, res) {
  const usersData= req.body
  try {
    const users= await User.insertMany(usersData);
    return res.status(200).json({ message: "envoyé", users });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "error", users });
  }
}

//Fonction requête pour afficher tout les utilisateurs
async function getUsers(req, res){
  try{
    const users= await User.find();
  return res.status(200).json({ message: "envoyé", users });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "error", error });
  }
}

//Fonction requête pour modifier un utilisateur
 async function updateUser(req, res){
  const personId= '6603677179e910617a8b26e6'
  const nameUser= req.body
  try{
    const user= await User.updateOne( {_id:personId}, nameUser);
    return res.status(200).json({ message: "modifié", user });
  }catch (error) {
    console.log(error);
    return res.status(500).json({ message: "error", error });
  }
 }

 //Fonction requête pour supprimer un utilisateur
 async function deleteUser(req, res){
  const personId= '6603677179e910617a8b26e8'
  const nameUser= req.body
  try{
    const user= await User.deleteOne( {_id:personId}, nameUser);
    return res.status(200).json({ message: "supprimé", user });
  }catch (error) {
    console.log(error);
    return res.status(500).json({ message: "error", error });
  }
 }
module.exports = {addUser, arrayOfPeople, getUsers, updateUser, deleteUser};