import { BrowserRouter as Router, Route, Routes, Link, useHistory } from 'react-router-dom'; 
import Navbar from './components/Navbar';
import Messages from './components/Messages';
import Appointments from './components/Appointments';
import AdminPage from './components/AdminNavbar';
import Footer from './components/Footer';
import ProfilLawyer from './components/ProfilLawyer';
import ProfilEdit from './components/ProfilEdit';
import Profil from './components/Profil';
import Reviews from './components/Reviews';
import AnswerMessage from './components/AnswerMessage';
import CheckAppointment from './components/CheckAppointment';
import AddReview from './components/AddReview';
import SignUp from './components/SignUp';
import SmallProfilLawyer from './components/SmallProfilLawyer';
import ManageComments from './components/ManageComments';


import PageLawyer from './components/PageLawyer';
import PageProfil from './components/PageProfil';
import PageProfilEdit from './components/PageProfilEdit';
import PageMessages from './components/PageMessages';
import PageAppointments from './components/PageAppointments';
import PageAnswerMessage from './components/PageAnswerMessage';
import PageCheckAppointment from './components/PageCheckAppointment';
import PageAddReview from './components/PageAddReview';
import PageManageComments from './components/PageManageComments';

const messages = [
  { Email: 'a_ameur@estin.dz', Message: 'hi sir, thank you so much', id: 1 },
  { Email: 'a_ameur@estin.dz', Message: 'hi sir, thank you so much', id: 2 },
  { Email: 'a_ameur@estin.dz', Message: 'hi sir, thank you so much', id: 3 },
  { Email: 'a_ameur@estin.dz', Message: 'hi sir, thank you so much', id: 4 },
  { Email: 'a_ameur@estin.dz', Message: 'hi sir, thank you so much', id: 5},
  { Email: 'a_ameur@estin.dz', Message: 'hi sir, thank you so much', id: 6 },
  { Email: 'a_ameur@estin.dz', Message: 'hi sir, thank you so much', id: 6 },
  { Email: 'amelameur2003@gmail.com', Message: 'i just wanted to say thanks', id: 8 }
];

const appointments = [
  { Date: '22/01/2024', Time: '09:00', Name: "Ameur amel", Statues: "pending", id: 1 },
  { Date: '22/01/2024', Time: '09:00', Name: "Ameur amel", Statues: "pending", id: 2 },
  { Date: '22/01/2024', Time: '09:00', Name: "Ameur amel", Statues: "pending", id: 3 },
  { Date: '22/01/2024', Time: '09:00', Name: "Ameur amel", Statues: "pending", id: 4 },
  { Date: '22/01/2024', Time: '09:00', Name: "Ameur amel", Statues: "pending", id: 5 },
  { Date: '22/01/2024', Time: '09:00', Name: "Ameur amel", Statues: "pending", id: 6 },
  { Date: '22/01/2024', Time: '09:00', Name: "Ameur amel", Statues: "confirmed", id: 7 }
];

const appointment ={ Date: '22/01/2024', PhoneNumber:'047567843450', Email: 'amelameur2003@gmail.com', Time: '09:00', Name: "Ameur amel", Statues: "pending", id: 1 }
const review ={ Issuer: 'AMEUR Amel', Recipient: 'KADOUCHE Rania', Email:'amelameur2003@gmail.com', Rate: 5 , Title:"I recommend !!",text: "Mr. Hughes is excellent with complex financial family law cases. He substituted into my case at the 11th hour and did an awesome job at trial. I highly recommend Mr. Hughes if you are facing trial without an attorney. He can step in to your case and digest the financial aspects accurately and present them at trial."}
const reviews = [
  {
    stars: 5,
    title: "Excellent service!",
    author: "John Doe",
    date: "2024-01-23",
    comment: "J'ai été extrêmement satisfait du service fourni par cet avocat. Hautement recommandé!",
  },
  {
    stars: 4,
    title: "Très professionnel",
    author: "Jane Smith",
    date: "2024-01-22",
    comment: "L'avocat a traité mon cas de manière très professionnelle. Je suis contente de l'avoir choisi.",
  },
  {
    stars: 1,
    title: "Très professionnel",
    author: "Jane Smith",
    date: "2024-01-22",
    comment: "L'avocat a traité mon cas de manière très professionnelle. Je suis contente de l'avoir choisi.",
  }
];
const lawyerData = {
  photo: '../public/media/avocat.png',
  nom: 'Dr john miller',
  specialites: ['car accidents', 'Child abuse', 'Personal injury'],
  licence: '27',
  etoiles: 4,
  numero: '+21321546053',
  urlSite: 'www.johnyy.com',
  about:
    'Safety and security in our daily lives it\'s something we all take for granted until harm comes to your or a loved one because of another person\'s bad choice. I dedicate my law practice to helping those harmed by others. This includes not only financial compensation, but also obtaining a sense of justice and accountability for those responsible',
  langues: ['ENGLISH', 'ARABIC', 'FRENCH'],
  adresse: 'Ain Barda Annaba',
  carteUrl: 'URL_de_la_carte_geographique',
};
const message =
  {email: 'm_laskri@estin.dz', text: 'Les annuaires web d\'avocats sont un outil utile pour les personnes qui recherchent un avocat. Ils permettent de trouver rapidement et facilement un avocat dans une région donnée, spécialisé dans un domaine particulier. Ils peuvent également être utilisés pour comparer les avocats et leurs tarifs. Les annuaires web d\'avocats sont généralement gratuits pour les utilisateurs. L' }
  function App() {
    return (
      <div className="App">
        <Router>
          <div>
            <Routes>
              <Route path="/PageLawyer" element={<PageLawyer lawyerData={lawyerData} reviews={reviews} />} />
              <Route path="/PageProfil" element={<PageProfil lawyerData={lawyerData} reviews={reviews} />} />
              <Route path="/PageProfil/edit" element={<PageProfilEdit lawyerData={lawyerData} reviews={reviews} />} />
              <Route path="/PageProfil/messages" element={<PageMessages lawyerData={lawyerData} messages={messages} />} />
              <Route path="/PageProfil/appointments" element={<PageAppointments lawyerData={lawyerData} appointments={appointments} />} />
              <Route path="/PageProfil/messages/answer" element={<PageAnswerMessage message={message} lawyerData={lawyerData} />} />
              <Route path="/PageProfil/appointments/check" element={<PageCheckAppointment appointment={appointment} lawyerData={lawyerData} />} />
              <Route path="/PageLawyer/review" element={<PageAddReview lawyerData={lawyerData} />} />
              <Route path="/ManageComments" element={<PageManageComments review={review} />}/>
              <Route path="/test" element={<SignUp/>} />
            </Routes> 
          </div>
        </Router>
      </div>
    );
  }


  



export default App;
