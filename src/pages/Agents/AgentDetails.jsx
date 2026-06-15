import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaStar, FaPhone, FaEnvelope, FaBuilding, FaWhatsapp, FaLanguage } from "react-icons/fa";
import { agents } from "../../data/agents";
import ContactForm from "../../components/ContactForm/ContactForm";

const AgentDetails = () => {
  const { id } = useParams();
  const agent = agents.find(a => a.id === Number(id));
  if (!agent) return <div className="min-h-screen flex items-center justify-center pt-20"><div className="text-center"><div className="text-6xl mb-4">👤</div><h2 className="font-display font-bold text-2xl text-gray-900 mb-4">Agent Not Found</h2><Link to="/agents" className="bg-primary text-white px-6 py-3 rounded-xl font-semibold text-sm">Back to Agents</Link></div></div>;

  return (
    <main className="pt-20 bg-gray-50">
      <div className="container-base py-8 sm:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          <div className="lg:col-span-2">
            <motion.div className="bg-white rounded-2xl p-6 sm:p-8 shadow-md border border-gray-100 mb-6"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
                <img src={agent.image} alt={agent.name} className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl object-cover border-4 border-secondary shadow-xl" loading="lazy" />
                <div className="text-center sm:text-left flex-1">
                  <h1 className="text-2xl sm:text-3xl font-display font-black text-gray-900 mb-1">{agent.name}</h1>
                  <p className="text-primary font-semibold text-sm sm:text-base mb-2">{agent.designation}</p>
                  <div className="flex items-center justify-center sm:justify-start gap-1 mb-3">
                    {[...Array(5)].map((_, i) => <FaStar key={i} className={`text-sm ${i < Math.floor(agent.rating) ? "text-secondary" : "text-gray-200"}`} />)}
                    <span className="text-sm font-bold text-gray-800 ml-1">{agent.rating}</span>
                    <span className="text-xs text-gray-500">({agent.reviews} reviews)</span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
                    {[{l:"Properties Sold",v:agent.propertiesSold+"+"},{l:"Experience",v:agent.experience},{l:"Specialization",v:agent.specialization.split(" ")[0]}].map(({l,v}) => (
                      <div key={l} className="bg-blue-50 rounded-xl p-3 text-center">
                        <div className="font-display font-black text-primary text-sm sm:text-base">{v}</div>
                        <div className="text-xs text-gray-500 mt-1">{l}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 mb-6">
              <h2 className="font-display font-bold text-xl text-gray-900 mb-3">About {agent.name.split(" ")[0]}</h2>
              <p className="text-gray-600 text-sm leading-relaxed">{agent.about}</p>
              <div className="mt-4 flex items-center gap-2 text-sm text-gray-600">
                <FaLanguage className="text-primary" />
                <span className="font-medium">Languages: </span>
                <span>{agent.languages.join(", ")}</span>
              </div>
            </div>
          </div>

          <div className="space-y-5">
            <div className="bg-white rounded-2xl p-5 shadow-md border border-gray-100">
              <h3 className="font-display font-bold text-lg text-gray-900 mb-4">Contact {agent.name.split(" ")[0]}</h3>
              <a href={`tel:${agent.phone}`} className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold py-3 rounded-xl transition-all mb-3 text-sm"><FaPhone /> {agent.phone}</a>
              <a href={`https://wa.me/${agent.phone.replace(/\D/g,"")}`} target="_blank" rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-xl transition-all mb-3 text-sm"><FaWhatsapp className="text-lg" /> WhatsApp</a>
              <a href={`mailto:${agent.email}`} className="w-full flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-3 rounded-xl transition-all text-sm"><FaEnvelope /> {agent.email}</a>
            </div>
            <ContactForm title="Send Enquiry" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default AgentDetails;
