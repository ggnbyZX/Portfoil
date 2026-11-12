import React, { useState } from 'react';
import { personalInfo } from '../../data/portfolioData';
import { SectionHeader } from '../common/SectionHeader';
import { ContactCard } from '../ui/ContactCard';
import { Card } from '../common/Card';
import { Button } from '../common/Button';

export const Contact: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    consent: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullname || !formData.email || !formData.message || !formData.consent) return;
    setFormSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      fullname: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      consent: false,
    });
    setFormSubmitted(false);
  };

  return (
    <section id="contact" className="mb-14 sm:mb-20">
      <SectionHeader
        badgeText="კონტაქტი"
        badgeIcon="fa-regular fa-paper-plane"
        badgeVariant="blue"
        title="დამიკავშირდით თანამშრომლობისთვის"
        subtitle="ღია ვარ საინტერესო პროექტებისა და პროფესიული წინადადებების განსახილველად"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start">
        {/* Left Side: Contact Information using reusable ContactCards */}
        <div className="lg:col-span-5 space-y-4">
          <ContactCard
            icon="fa-solid fa-location-dot"
            title="მისამართი"
            value={personalInfo.location}
            color="blue"
          />

          <ContactCard
            icon="fa-solid fa-envelope"
            title="ელექტრონული ფოსტა"
            value={personalInfo.email}
            href={`mailto:${personalInfo.email}`}
            color="emerald"
          />

          <ContactCard
            icon="fa-solid fa-phone"
            title="ტელეფონის ნომერი"
            value={personalInfo.phone}
            href={`tel:${personalInfo.phone}`}
            color="indigo"
          />

          {/* Working Hours Card */}
          <Card hoverable className="p-5 bg-gradient-to-br from-blue-50/60 to-indigo-50/50">
            <h4 className="font-bold text-slate-900 text-xs sm:text-sm mb-2 flex items-center gap-2">
              <i className="fa-solid fa-clock text-blue-600"></i>
              <span>სამუშაო საათები:</span>
            </h4>
            <div className="text-slate-600 text-xs sm:text-sm flex justify-between py-1 border-b border-blue-100/60">
              <span>ორშაბათი - პარასკევი:</span>
              <span className="font-bold text-slate-800">09:00 - 18:00</span>
            </div>
            <div className="text-slate-600 text-xs sm:text-sm flex justify-between py-1 pt-1.5">
              <span>შაბათი:</span>
              <span className="font-bold text-slate-800">10:00 - 15:00</span>
            </div>
          </Card>
        </div>

        {/* Right Side: Interactive Form */}
        <div className="lg:col-span-7">
          <Card className="p-6 sm:p-8">
            {formSubmitted ? (
              <div className="text-center py-8 animate-fade-in">
                <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-2xl mb-4">
                  <i className="fa-solid fa-check"></i>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  გმადლობთ! შეტყობინება მიღებულია
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto mb-6">
                  თქვენს წერილს უმოკლეს ვადაში გავეცნობი და დაგიკავშირდებით მითითებულ ელ-ფოსტაზე.
                </p>
                <Button variant="outline" size="sm" onClick={handleReset}>
                  ახალი შეტყობინების გაგზავნა
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 text-xs sm:text-sm">
                <fieldset className="border border-slate-200 rounded-2xl p-4 sm:p-5">
                  <legend className="text-xs font-bold uppercase tracking-wider text-blue-600 px-3 bg-white inline-flex items-center gap-1.5">
                    <i className="fa-regular fa-user"></i>
                    <span>1. პერსონალური მონაცემები</span>
                  </legend>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        სრული სახელი <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullname}
                        onChange={(e) => setFormData({ ...formData, fullname: e.target.value })}
                        placeholder="მაგ: გიორგი ბერიძე"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50/50"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        ელ. ფოსტა <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="example@mail.com"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50/50"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      ტელეფონი (არასავალდებულო)
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+995 5XX XX XX XX"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50/50"
                    />
                  </div>
                </fieldset>

                <fieldset className="border border-slate-200 rounded-2xl p-4 sm:p-5">
                  <legend className="text-xs font-bold uppercase tracking-wider text-blue-600 px-3 bg-white inline-flex items-center gap-1.5">
                    <i className="fa-regular fa-comment-dots"></i>
                    <span>2. შეტყობინების დეტალები</span>
                  </legend>

                  <div className="mb-4">
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      თემატიკა <span className="text-red-500">*</span>
                    </label>
                    <select
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50/50"
                    >
                      <option value="" disabled>აირჩიეთ თემა...</option>
                      <option value="freelance">ახალი პროექტის შეკვეთა</option>
                      <option value="internship">სტაჟირება / ვაკანსია</option>
                      <option value="consultation">კონსულტაცია</option>
                      <option value="other">ზოგადი შეკითხვა</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      შეტყობინების ტექსტი <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="მოკლედ აღწერეთ თქვენი იდეა ან შეკითხვა..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50/50"
                    ></textarea>
                  </div>
                </fieldset>

                <div className="flex items-start gap-2.5">
                  <input
                    type="checkbox"
                    id="consent"
                    required
                    checked={formData.consent}
                    onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                    className="mt-0.5 w-4 h-4 rounded text-blue-600 focus:ring-blue-500 border-slate-300"
                  />
                  <label htmlFor="consent" className="text-xs text-slate-600 cursor-pointer">
                    ვეთანხმები ჩემი მონაცემების დამუშავებას პასუხის გასაცემად <span className="text-red-500">*</span>
                  </label>
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    size="md"
                    icon="fa-solid fa-paper-plane"
                  >
                    შეტყობინების გაგზავნა
                  </Button>
                  <Button
                    type="button"
                    variant="secondary"
                    size="md"
                    onClick={handleReset}
                    icon="fa-solid fa-rotate-left"
                  >
                    გასუფთავება
                  </Button>
                </div>
              </form>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
};
