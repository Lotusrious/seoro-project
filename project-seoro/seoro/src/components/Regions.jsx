import React from 'react';

const Regions = () => {
  const regionsData = [
    {
      name: 'Seoul',
      description: 'Discover the vibrant capital city.',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDhIqZcTyjK5zZ0TAuVxu9V5YnjrPEk-i18Wkw5sQJc4rWx1xAr1R79i00PRw8MhuAdeYfBAUptrdSpX6YLprXa-8V5GI37sVu3MlbsuhMAQvZpygNF7AdV1S2wG2aN0wESwHh-4ZhLPkc8FU92yqLRVP6ne_Dq9wwZA9dFG2IsCd8HXM3bcfjGCJP1A3SBotwmkXExBxULK4RekKacB7dHQT9JoS_8rJsn_nafxdFT57oLLd_GldOokdUWKGMSgNcF4eyN_3cB7RUQ',
    },
    {
      name: 'Busan',
      description: 'Explore the coastal city with beautiful beaches.',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuB-0vB0txJoc5E9z7dgbmqA5sr-4VhLD5D-AdPkM5JpvyO9xL4XiZ3SkvJhIS3XzXBUNJwP-0uKTAnm1Q1cCwHAUCokeaNsF1JoQFUOPiB7CRpX6m8sJV9erhYiIhcPXm4DaB_iwTm495g4TzMB8-F_KYac6ddfiYydK1WzafGp6HJ-92AALxVy2GW38OYLP-KWqYG5xapglUaZfsrHVBbPyNij88ZhxpiX3XPO1BIPOHysTFVgyLqf6OZ6-i-lUF77rKbYtmRs94rK',
    },
    {
      name: 'Jeju',
      description: 'Experience the unique island with stunning landscapes.',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAo2AvXWUUFWf1gHvxYaLk7gWq74uTWOHMCQy64GO0m2-YqxqvppHvYSEk72HPOOsDB9clEQ9sg-uZgVeiF7OL4Jnq_EJdPgLlPrwPvsMO4EfjQHuqPIDWa-6wEjuCIRFIYaE1hOQwqZK2woK0Wp-E3Rvyhn4ExgLoxwLJ9WHY7rbob7k4YOSGuwQKVDthXxcoqL3ivOO8gnk-An02N6KJTZjKortr6CQ281c1MZxnRGPsjANJQtdSG5yQTc8xV9G4eI5fo9hHIX2qR',
    },
    {
      name: 'Incheon',
      description: 'A major port city with modern and traditional attractions.',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAMgfQigeifu9Y5e3eYW-_jNcUSjidBKGDzp1EtIMNenyycWKgZTHrWnobkRET3X46hMlI1yzqRLoZuMqjxRnoAHkv8qyW7NWvZDk17lHIee8tWbSEdxVd_LG86OyfpV7gxerLBY4zhyqJT0ogRn6NGVfITvy2dkrCvMOJUtbdQ33D1AWhw9vgZtex64On4zB9IxZIs9D2TDX_tZ7mXyloEkDMguSXEZ_0hvSsYVT9kD3ITJtl3QL_EWIlsIjT3NqPcHH7cXcg49UQ2',
    },
    {
      name: 'Daegu',
      description: 'Known for its fashion and lively atmosphere.',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDDsX6dMod9BysfKmtzPtEXzSTrn6scl1xwmXAbCL3Vs6ilMCeLR5lVbQMTXTRCZkRc2KantIg_Uuj-fKAONP4jOTxFZlBCVJ9BwAh1izJaZQwtvAZIEmfXZr3C8lTu1E5FCCHT49a0cenkf6eZnGQ6oFTRnf7nbbmtgVI6a7wuYD6UV0du6d59oqxBl5wzxCGcSAKxrFWExhfSjognNPiRyF-6Z9IvlUz4lcY-Lc8BN7mRZYVIEVV2sabRhfc041grzLYOFVMRkOoj',
    },
    {
      name: 'Gwangju',
      description: 'A city with rich cultural heritage and art scene.',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAfS8cdDGUfF59T1EAjmAqEMecRRQ6umsZ4TsUY-LFaKNlSPgW7IVOwUnWUpubTFxgfWpqAQOaIf2V06qS_KBt_5OI03Qr_L_nprfHTQufxaW7UTb6vxKiAAQpPSiqWi3cNrrgyPKaOtItlzvkL4CZNjoOA9RhTyGnxU-FERxzrSVqGt1_zbMPVNi4N5_BKUN33J0t6ruPHJjrYldvS1A6hJw3bRT1qepzDqEGon4dMr7S76FanhCEjPCFb92ihXKiqHxSv8L7Rd8_O',
    },
    {
      name: 'Ulsan',
      description: 'An industrial hub with coastal beauty.',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBUoek9pjmC9q3mj0nrgD8jTQp99e46xTkinKtA7UVUjXzvyFRYsSHgMAeo7ZfbSx44ifxS_G4GVKsCmzT3r1NqyoBJvjy9ejNAy6yMt5F7qytRLpkgT3QErzx5ALr66Ysm8Hp4mQSnhDwolpclPCMZZtHy12BG9QO976BJomYJRTg6GoqBeQDRCqd4uadaVGrdAj8V7WT31-y0LOaP0PiAYuUlDA_QPUaAusPB_KJBZMOX4SM38N0shCsSs6g3pzogE6Kd-GWUrDqV',
    },
    {
      name: 'Gyeonggi',
      description: 'Surrounds Seoul, offering diverse experiences.',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuA37-waBpmmOsaY-AolBpBqp3vP54ybS6KMdhntHDfLCcJmbM-bunNTr_MXFWxZwn0GdXWi7eEKqC62xlzEohrtJEdqvkh-gyFsv-lTFbTaA-RPYdsn72GTV0K8ciSLE23oAA8hDM1tz7k2bLK-DCbF5rDe3F2bZTAJd2IjG8pIBs_0QzonvxAkKK0OZkcfrUv3qb3P9sf87YB-KsIN0gQQe9lwspNp2qwGm6pq6ckOTSZbYVfic1qhqqZx-jfqFNl04z05sbxeksfN',
    },
    {
      name: 'Gangwon',
      description: 'Famous for its mountains and winter sports.',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuB5uh57cSw0-LjjzhxouCDsGiUaKj-SRNC1KtUVx8f43tC5a4FT2_2lkVutnMhAtwV8t8yjqf_eQfurn9_k_kQp5HBvMIaY4z3QMnwiuCqu9pn5de8ZNb1wy9CrxFsNmHrtHvAmDM_mZgWSDxrdFK8sVJ-vusfScV-un7LaUA12HqYkLXgFj7ZHJgW_lbapiXsdGhY6K_D5zHr8AoVqDd9sC0C1ad36Xi17Tvh9zt-MItS1DjUr6UbuNL1PFcwyhgvAMuC9twUh4DqL',
    },
    {
      name: 'Chungbuk',
      description: 'Home to scenic lakes and historical sites.',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuB_fxZll2sbjCgbKxkWg1u5MX-_8ZLX1hWamOqikCEtLbcGnnuFTYxwX4vwrA59f0jWgM4E08fv0WZ_fKdVu7AvGP5BZri0xXX7tU8Y5Wm2wSbiKzgphJ45p2e5COtjYKh-JYJ5wi4YNBgah-hhIqBuu6blw_0E2X7NTMyLtz9krEgv1TGppv-gl7-91gmdUNQpF1VH4W6Oz-mUqyRRuVAp3ytjeDXtT6P1-NjQMScuaGjjcE9Tm2_qvCqIYnO1JY68_TpW8UzLvkbI',
    },
    {
      name: 'Chungnam',
      description: 'Features hot springs and historical fortresses.',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAsDL7eYH8MljpctxISKV5e-xWIcXgQozAceiDuP-bVFkxVz83A1JzUPzRe2IC_hagqIJQme7G_WbbVqSGdyFs59XZq1DXRMTWI0xh37IDlJxOkyir6p4GYby54OhhI-LYUFLslvppvMYfktzripGOd8GlaPvsorbAoGRN_Kt1nKn0Qa4jzdpsBjdfo0kI6cyhsp85uYuD-Ndm4FNHwj-I2Pr-lfSdS20oN7Z16m-6vvdrXsmh4cXdZQVY2DjTaFh7Jsj8zXfWjV3kA',
    },
    {
      name: 'Jeonbuk',
      description: 'Known for its traditional Korean houses and food.',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuA3zJziW5DpOZrnoYcRCYFHgPM0UOxVsMyWw-2O2QvFiTGV4bYtmF-NpGAwJARV96tMsLQYSVssOxKp6BvJSIwq2w0GG906TC-biucfijN5Ch841phq69vbUdXhfsO67ekKgOojlcW7bUk3ceIgMcRzUHtXub4WQrFhwr-1t0TvFgTfJlL37UQl1wxYV7yUY5ZqmDwE-vQnysPMP66V7C1Za07_OQ812bT60fEYj5LIPknJQOJ3wuYE_uT5vdiOD25A4qRPnEKlzh_b',
    },
    {
      name: 'Jeonnam',
      description: 'Offers beautiful coastlines and islands.',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuB2lYc5n0L7vjtXHdZV0pLnv_zaezsmHOsPonKIF0Gnv298dSGbGvmuN0rDabfGgKSexs6VMyEe-wK5_tKdEFKq52hYHDBHAixymZSkvwlcJS8UNB-Bk_7rUQxqquxKy3FTF37FcFyhxysdTKRCRtShEFxC5rutbvbZkO75oiVUPNVA2eUEleyR4OprFR4wgULNZXpsgGrXUnn-CD0hGmBkVRE3u16bk2yqZcMxbz403eXN3WgSwiRd3D1EG_GIlpR1djn1RppsbgWD',
    },
    {
      name: 'Gyeongbuk',
      description: 'Features historical villages and natural parks.',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBWecXf6AOIqAKKPHQc8E8wzLfJ64jyPntS5qTD6LrQbFR-fo1Gy_WHYSGjL6RIKCC4KY7hn40gi7kDCZZU7RwV1TpgrB0oR_Ui4zLJBBmOlGfTvEJXO54sh0fIORRWiHWVQSkID04j69ySEoEwHxhew9hcKb7JOn27W80KplesHN6C5VKTXCsi2BGLDGFIjMoCZNc_Kr-tEwxd0JYaPPMhDJLPnChMOPL_wGHVWcxP_PrxRHzIrNVMVR9aYtdiy-JeQ8FzJ_2MTAQP',
    },
    {
      name: 'Gyeongnam',
      description: 'Known for its coastal cities and historical sites.',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDrF9WJrMuHmne1l_mzYqlMNIwEl5LgMkn230GvupfGej4tRA8HhdlmSHXo-gdrEsSOtCJh9nHL7ILNyiTMsYDUN7hHsZT_AQRYKzJLBXY8lepURbxqgAJ0l2PlysWltS2rWi_uTXB1smDwMHRRBqtiMItOu02hjAzqYoG-Ps0fA-XMFL_AWHC9YxvXLj9ts5rvE-drmPTryPdw1WERn1_5LQc9bmoPIRiFNnHX9GOvxDtj77ddKTFrW8OaznWz0IzgyHDG3-6WM3gp',
    },
    {
      name: 'Sejong',
      description: 'The administrative capital of South Korea.',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAdsagFiStr6FpmKJxbJtslDIp_RBBF1ZWda6lsZ9hczy8uiuytx4FCpH0QnwICU-uu-OoANh_ij_ggCJc9xLKTjoDlKFAq4UNKmuXreIlo5Wm3WWBsSZijtGzWehaiBGUYDu1wIyA1aOK30E9-TykMXswKElCgQE_-DA6oGseHR_krjzvlHtXKRiVUlyqRKwdbEdAGwSqpvGryKfY-r6FmpWpBsvjAYiFemauE81mlEmaMx6QXHtUq1iFBQmgx5OYIxazX_D0Y5f5A',
    },
  ];

  return (
    <div>
      {' '}
      {/* Wrapper div for this section */}
      <h2 className="text-[#121715] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        Explore by Region
      </h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
        {regionsData.map((region) => (
          <div key={region.name} className="flex flex-col gap-3 pb-3">
            <div
              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
              style={{ backgroundImage: `url("${region.imageUrl}")` }}
            ></div>
            <div>
              <p className="text-[#121715] text-base font-medium leading-normal">
                {region.name}
              </p>
              <p className="text-[#65867a] text-sm font-normal leading-normal">
                {region.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Regions;
