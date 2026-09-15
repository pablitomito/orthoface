import fs from 'fs';
import path from 'path';
import https from 'https';

const images = [
  {
    name: 'logo-orthoface.jpg',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCd5j0HryX4jhlxeP797pD15tsRLLNqdOv87KiLI1dN92_z42vta0OftWVjtcz4GqaczKPUg6lv5mnIG46-_otlrgg1Q1-D_lSn-7gA_IUzHHfRE_1oo9ctxjhfqUzZedf1b1t3_nt7nkqBdXWu3oa23Az7HVzy4RLnF6R1tN4XWnnSaCfniEoTkLuaTkqAr83oZtucmRuiJkntSdehq9AhYETu6GowDZL_ZQy7xMfsOzLewAcqU2aEckNZ2109MFYPPNA'
  },
  {
    name: 'dr-fernando-hero-desktop.jpg',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD66S-H374AtbaSB7Dw8s_XBl5qkf7dhv9npZp3SDx9i3fwKsSL5SwCIcXb1zUgS1Rp_s673XwWlYuikh9kIp4oBb2cRNs2dj3sKwhz2hr6No29nT6wk_Wuh9b2DaYBO2uAnp-6xEraBvcE-K8wh9gNKMJimO_WzR_IIsyLh3MSsa5xIhungtYjjg-jdCdEMZESB6LUN1_xkcNtYFBHhAHOT0kyAt9xiNu1fsR-RU3j77GQC0YJdny-8sQSBmQd6tXEtOs'
  },
  {
    name: 'dr-fernando-hero-mobile.jpg',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAR_4OzFadoMEQ65a8ZgNRsChtTDJwo_ejLL1PfTlN0vgWkoOGJA_B1v-lsV7CGECiJjw7Uey9Dtu5BFqB6_VgxpKy0pw9MXUVxOFpGY5kRek8zjtuLb7Ft_J7bw26djUCniZXEC9EG1m-T0qf3eSsA7I-7_KYc7_PQSeK5bVvU24zcK54Gl3djGZD-trrq9m3clSwg_vnmamXty9ifHRQrFpE46J4FNPEDa3_pprNP0goTIYyfPM9ZB0STbtHR2zibRkE'
  },
  {
    name: 'tratamentos-resina.jpg',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDaU_GJwFMQI6QMGguEVS0bXqO_IKvfJL-NINWwJ4ciUsWtl4s0Mt-ZASTfFZlOj6UIjy6JYS8YVh19I7dAZneK1bsgvs0wWueM-o-goUUURRMUQ0ZO0bmBsau0T5fXDGxfx9NgJRC-i2Lu6mOIhaEyrkIGbd01TYIGgC2JtiAXxJ5HsggpuIkanATXe4lN_BY-KIal836TmH4n2USL2frVFedxrclH8UeantrEh351bukfzU6JmLlH5JOf-IbKgvvQglc'
  },
  {
    name: 'caso-bruxismo.jpg',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBRszqFZETSf3rQYXH9PfiV_Np1NCwupueUUJ54wDavQXzLnKjO2sOJiVWrWG25rQd76buNMSsRxuSkDp9HkuRHqAYGW8FA_vq7JieFGcYQGOtN5zhIMJvzF6vgtPK9Wipie6eFdMdq0T1IWrexBNSSJBs8hZQFyinZc6ZJqSRoEZyLkq-gQIFYFyrbDDX5SJtI1vJSEbiEek9VFI3vshT4dITLsKduSF36aAcDN1nWUwb_dgeo1fxPJ1iJGQYTO5sJFUs'
  },
  {
    name: 'reabilitacao-oral-destaque.jpg',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDjI8A9c1dAZX5CnNGWIIOJtcJ5e__JN80kQ-eJwLl64IyxS-OULTixLwn9xBMPov_loXOjojC1DPJjkFlUSM2p80eLZQobvKsLbmFi-i7RuxAsC6GsEXzU4UehPLduDyjRE1GrfOB4ClMwW9c3PBaVedl8_PtgNQNCNuF6ASWwCcMUP4tMSwdy4tCK7m1uEc5w10qRNxBq3eV4dcigthMyzmdkMobrwoJUNRoI0rmQ5lWLvUEApUvmlMc6UspV1hWMP3M'
  },
  {
    name: 'resultado-resina-1.jpg',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBc-opMYhJMfbV-1H2xSWz-Jn1w7iMb_5yyl89lnKXxMNsBpwJYp5uBPloGu65e3FMnf1GNvED8apSoqZ6zbiQMLjpi0I6nfbgqzx1ju4pFGhGUHx6V9MC_WBaR9tnQenwCoho-Z38hZ0Iohp__za2SabJjDkGbV33NzpLwl1hLb5zYlfjsltKN7gE_QotEtdm52KN6xp-yGJ1WrkQViizDS57kwTct3IsmNI1rPUcG9elcnyIefZEJdetbDAqTlejbJZc'
  },
  {
    name: 'resultado-pino-reconstrucao.jpg',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDh87sJI3-N5TwZ6hpuzz0hvoZSGZRORGoT9qTQ3LxhvHace7KDkFg_8qbdKke--SjX97knQhOiaVEMGLoe2FPBNgF8PoCnpXcvR0zSkZSRBNEp3M9C-5RN2CXzvHkkagIcCgPHxq0LPhsPeIwDs0JD7lcD7MsyWdAotztchePFp0R1PnbDK49RTpCoQ6UTrIXmiGL5Ptj8-AZa1g-eXkPPA6DLJ2h3cNYVRGHeaANJXBQgte8PSoSRynobbwkd523yNKk'
  },
  {
    name: 'resultado-clareamento.jpg',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAKWJa0bqLEJ13g0CW9Vs2mZXPYA3i29gJ-qcKoP9_MO2kWliOstJRRBEu_gfN9zZHzqbSr9kDeewBW_-DPujzHUm13LuT1392zCOXOa5rUX28e0pPazDFcdmcJVdUovU4EAmyPmKsvvJ5n4UW0HJZH0XzDsw0z2QLZEAA4dCkP2sOavxFCu-13VJI7_ErORIcOlHpcpwjbOt5s8qng2Y-H7abb_NT1RBZzdcZa4b18O-SgDqbO7mvRuAZtuvsB_n5T9rI'
  },
  {
    name: 'resultado-aparelho-clareamento.jpg',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAVB9mQCy1k-8jZm8G7E2dCocL6yTiAU2JBVXee7d7T3q5zd0QcxESXTDcb8nsObeseXegaS2FTMbFmVRL9eg7ntWxgP1FNiYNUb4_zCd-3QgKftAwjAgkvU6xVPL5fLx57oMd1TjgqFZ5-hhDlZOR-qRBN8BaD8GxVeoUJinUBFsuHZytHne6iHJz6qRqVhK5zlLsB-IdkP98BlMuJJr1tCPPQ-em9PhpY7ac1MC37J9viBl9wN27npKdicNKqXqtagJI'
  },
  {
    name: 'resultado-faceta-masculino.jpg',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD_ki-QmxROC2_tPW3GbuTq5TPK64hG4eJTHFBaw8Dk3PMmqohJBxDXiYSUI0WOHzUjhdUV56xaNd2AYHvR9EKYV09iF-EQIUlQFRvY8BflgIa5DisojHx6e9yb50DnpEmj5BLo5gkeNAMzMoXbgPKKcV_1kisAPJ-v6BMB-dUoDxbP_Y0mEJP0NPFtXccF9hL0Epb2kO80MK-E4vmMkIjf_QJqehLj8Xyyvwk1Lhsa6HcwdxC4W1zctG4BWCtUWh1mtMM'
  },
  {
    name: 'resultado-transformacao-sorriso.jpg',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCvrP9FWXXGjrRbdvCepkFl-OPrxDq07tliT9NH9Y866E4PZWKX14-rT65qA9jH8I-bOtXuSV8ZhFyFBUZ_-X-8ZDr2YoRb4GdzZUFtFgJ6wIpzC3rk0B_u4a2_EqIu6OeBDp11yIAKLIrvKY19SSyzbYLSrWTQU7_AKogcSwr4ZU4msdzve8Q3TFutAiFvYMFHzJInzMUd_MotDZSfeqnLtFrGhy84PTTqOSXHFqJJ2IWiM_9cSiJ4DfYlm3SU3M6DrjQ'
  },
  {
    name: 'clinica-orthoface-interior.jpg',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAvkFMkpQcI7XbvcUyu7no1RJNeJ2On-jYoFfwlBmc0Z1I6uPGxuJSo9oPIRl6jBpjV3vbYT6phk6YtrwpV3o70UqPDC9HSdA3Q-ODqiGei2PeuEwSbuDULp0lJ_Z2uWuI3OxO34l_eL_aEXb6308t3L2XR1bo_u5XP-H7WNRJ_qPhOFH6M9u4IWHLPrVdEtkyfp9-IQfanJYct7WHMxNBnAG_FAUi0O-V25g9T0-L79VzrcEmosKefWwGfZbJs5jHPuLk'
  },
  {
    name: 'dr-fernando-avatar.jpg',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD4SdKfw-KWpnoa1X4RPQ5rxSMnC7PYqNUDjYEh-JbWclQaaAonltUmVLlUsLxodOunW1yWsbjWf3zzEGV9Uj91NzBVRYEHJgJ5SbwN22VY9gaHCK7tjqlrnjFMSPvc9SCEHVI0V8BhEoc0NV5KUZoPB-VRIFUaTF9nyV2YaeFBXsPwNl336v6NrfewvOoFhtsC8wecnIcZvKG49V7ouarOGSnx1WwfSDPMUcqH_Q7JfOv1k9GAxehUn4GQ0p9fFp8yHBo'
  },
  {
    name: 'logo-orthoface-footer.jpg',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDfMxdBdQ9mjmLBOo9gELkbw7fQWz-lRaF8vkh5XJRlvIpA9HzPN8-X3P-MBbBGhuywSCXhtIOlSwTWXBYsisxMbcO-Df5TZ8e3hAVqbOHGdfOWPVNPR2QAAlAaDQzqXQrYXiKLw6-wZYWB31xETcJ7I_Ie8ossYSXmBULHG_0Hfgj19G9gQdqvFbQatFJ2gez_CSn29_rX8zgz9drSLejJIGMFv8nRlOspbdK5gAaR5J0nifbJV9qPR8EUx-R6bB-bKYo'
  }
];

const targetDir = path.resolve(process.cwd(), 'public', 'images');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        return download(response.headers.location, dest).then(resolve).catch(reject);
      }
      if (response.statusCode !== 200) {
        file.close();
        fs.unlink(dest, () => {});
        return reject(new Error(`Failed to download ${url}: status code ${response.statusCode}`));
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close(() => resolve(dest));
      });
    }).on('error', (err) => {
      file.close();
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function run() {
  console.log('Starting image downloads...');
  for (const img of images) {
    const dest = path.join(targetDir, img.name);
    console.log(`Downloading ${img.name}...`);
    try {
      await download(img.url, dest);
      console.log(`✓ Saved ${img.name} (${fs.statSync(dest).size} bytes)`);
    } catch (e) {
      console.error(`✗ Error downloading ${img.name}:`, e.message);
    }
  }
  console.log('All downloads completed!');
}

run();
