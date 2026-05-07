import os

service_dir = 'app/[locale]/servicios'
pages = [
    'rellenos-dermicos-acido-hialuronico', 'cavitacion-ultrasonica', 'laser-baja-intensidad-capilar',
    'hydrafacial-md', 'radiofrecuencia-corporal-multipolar', 'radiofrecuencia-facial-fraccionada',
    'toxina-botulinica', 'skinboosters-profhilo', 'inductores-colageno-sculptra-radiesse',
    'bioestimulacion-acido-hialuronico', 'presoterapia-drenaje-linfatico', 'criolipolis-coolsculpting',
    'mesoterapia-capilar-regenerativa', 'mesoterapia-facial-regenerativa',
    'microneedling-factores-crecimiento', 'peeling-quimico-personalizado', 'hilos-tensores-pdo'
]

for slug in pages:
    path = f'{service_dir}/{slug}/page.tsx'
    with open(path, 'r') as f:
        content = f.read()

    # Add Link import if not already present
    if "from '@/i18n/navigation'" not in content:
        content = content.replace(
            "'use client';",
            "'use client';\nimport { Link } from '@/i18n/navigation';"
        )

    # Replace plain anchor with locale-aware Link
    old = "<a href=\"/servicios\" className={styles['btn-outline-white']}>Ver otros tratamientos</a>"
    new = "<Link href=\"/servicios\" className={styles['btn-outline-white']}>Ver otros tratamientos</Link>"
    content = content.replace(old, new)

    with open(path, 'w') as f:
        f.write(content)
    print(f'✓ {slug}')

print('Done.')
