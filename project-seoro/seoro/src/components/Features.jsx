import React from 'react';

const Features = () => {
  const featuresData = [
    {
      title: 'AI Issue Commentary',
      description:
        'Stay updated with AI-driven analysis of current travel trends and issues in Korea.',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBO_Sw69vZBsThl4jUvngCL3wGTbIlYgMNsy4w6lFlKGUQYMJVi_7724_5Kx52KIKobIEDT0xQI4Pv0NXDOHogJZR6HlYZ1T8ia2s7A8X3Y0KA6g4EFvPjjt4ScSJpvEpEipHDrLUbEs9phXnlb8LyqtgCC5Hc7B7SISPBxQ8_Fq7PaiZ8sqLMMLgjyU3LYmbvFHPIZ8Z51ISRzZVxWRBSRzvgTg0ajTjhnS7x1x7Hhjj1V0F1-4w63VCgwC4nfGE_yxhsdRAEVJiJ9',
    },
    {
      title: 'Regional Recommendations',
      description:
        'Get personalized recommendations for regions and attractions based on your preferences.',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAHOwR-iZ3iRAzimASSSdPEKVOhuaD21-tCzpP2DXwY11QDYaqFmtHIimHCJKF16S8_Aid0atMVpw8FS91LLUc2lig7e1VDdVqZlHpB7riYG0zrabQL4Ao6h2JgCQUXpTpE1_MKpIB-xyhquVoOZCmPAfb9s4jjy2aII4cznsP1EQpHHR0AhU7EvxIqpdjJpc4xV1seA5eGSklCtBM3wKLsSNuHeyFxlB_Ax-FpBej1XFtnekXdT9qodRHPmNrs2IjmoPyQOy_EFRKp',
    },
    {
      title: 'Blog Summary',
      description:
        'Access concise summaries of travel blogs to quickly find the best places to visit.',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuC6OFhHfuiCUcGM2rm7JHbxUrHlz34bDpJPfeu0uuDF7TcyiL-q2a25A2LU4NscLP5whQBJdH_52c_jM6LVUd0vLUtqj6b3-YWDewyLtsRDdyZVRDTpxSQmKUhmYLj3a83IZT0cib23i5ljuCxyRlltKNL3-X7Wd6-Zfk2StrUp6dtJD433-ZKlwiJvlOCMr9-Y9XpV8yldFvBQ1zl3OUwDwnHZIo_X-jV76I2dV7YaTSewOFQmHgzGddpvcvK2ohPqmkAS8z_5esMu',
    },
    {
      title: 'Map-Based Discovery',
      description:
        'Explore Korea using an interactive map with AI-powered insights.',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDKNbp6Cv6508HSVDSd3g4-shJYPT7rlCtnGGiuTNTSrDGoZyPVImziweklLjtWfZUgoUpjftaPOY5J0dezYte-3r0BTrbmePHF8tcDZ4_m3HoZoD7qYdmo4nBhGUD_D15bHMj6LGNeQZPMvGFjgu3Ixm2DwfVaYtzDxY5jsxHIyOhHSngfDH2Lr5amb92d8P1QOGKVYOv8u3exM-tqbN6dbfxfJWsOBNSU26Qhh7BNG6EbfzKo3KSrjCTPg8KAx7ViGLebID1vu48y',
    },
    {
      title: 'Trend Keyword Analysis',
      description:
        'Analyze trending keywords to discover popular destinations and activities.',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBskZMa7eTGaKyuv87qZ3o7gXI1XQ25nnatcT80WgJw2pil0jmyabOHKL5lHpPbk652byr1gRytacYdXVs63tDPJJbQnYtDuF-MrdSqAudDGK7uTPAPnERFCf5lTTWID9g8s9eMHo1p36wb8-aiaZjev2aZTLbDdSk8dFEkjTFhqPOOAIY5fuPlpCZIklybLbbD8kdKaggLBjNAl3yp_B5eeknm7g-vmE47Eqp-0kAEZXvniA7tg_-KQXw7dGx4Gvpu-R1Za6v7whdV',
    },
    {
      title: 'Custom Travel Feed',
      description:
        'Create a custom travel feed tailored to your interests (for logged-in users).',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBpIrqQhdsGLh-gnyFZ_ZelaixgsTdMZg54RcTO4ClyVi8XZaNLm7fGL1A-vgx5CaGE7nprYddIh-I9EeFciiz1MrCHtnIZWIuQfEh2i_x8tmRuAwIoiG9EhopayBxW2UY3cXUOJpLqy6GZpyRQueSowdgNgdhjOUqqdi0nAcxZK0bRVsdBOa85qn3LGVgSxnf_JCKYerFE0lWBS5_Flf1pguCBXKztA4WmLfN5VJ-d0VpMF9SVYK7nCXcGuOmc5ZMyK7-w1mikoNSh',
    },
  ];

  return (
    <div>
      {' '}
      {/* Wrapper div for this section */}
      <h2 className="text-[#121715] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        Seoro Features
      </h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
        {featuresData.map((feature) => (
          <div key={feature.title} className="flex flex-col gap-3 pb-3">
            <div
              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
              style={{ backgroundImage: `url("${feature.imageUrl}")` }}
            ></div>
            <div>
              <p className="text-[#121715] text-base font-medium leading-normal">
                {feature.title}
              </p>
              <p className="text-[#65867a] text-sm font-normal leading-normal">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
