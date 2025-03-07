import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

# 注意

- type: "category" の label に関し。このファイルは翻訳の都合上英語で書いてください

 */
const sidebars: SidebarsConfig = {
  vrmSidebar: [
    {
      type: "category",
      label: "about vrm",
      items: [
        { type: "doc", id: "vrm/vrm_about" },
        {
          type: "category",
          label: "how to make VRM",
          link: { type: "doc", id: "vrm/how_to_make_vrm/index" },
          items: [
            { type: "doc", id: "vrm/how_to_make_vrm/setup_unity" },
            {
              type: "doc",
              id: "vrm/how_to_make_vrm/convert_from_humanoid_model",
            },
            { type: "doc", id: "vrm/how_to_make_vrm/setup_vrm" },
            {
              type: "doc",
              id: "vrm/how_to_make_vrm/vrm_behavior_confirmation",
            },
          ],
        },
        { type: "doc", id: "vrm/how_to_view_vrm" },
        { type: "doc", id: "vrm/vrm_meta" },
        { type: "doc", id: "vrm/vrm_development" },
        {
          type: "category",
          label: "Vrm-1.0",
          items: [
            "vrm1/index",
            "vrm1/changed",
            "vrm1/gltf_details",
            "vrm1/meta",
            "vrm1/humanoid",
            "vrm1/expression",
            "vrm1/lookat_firstperson",
            "vrm1/springbone",
            "vrm1/emission",
            "vrm1/mtoon",
            "vrm1/constraint",
          ]
        },
        {
          type: "category",
          label: "VRM Animation",
          link: { type: "doc", id: "vrma/index" },
          items: [
            "vrma/univrm-vrma/vrma-import",
            "vrma/univrm-vrma/vrma-export",
            "vrma/univrm-vrma/retarget",
          ],
        },
      ],
    },
  ],
  univrmSidebar: [
    {
      type: "category",
      label: "UniVRM",
      link: { type: "doc", id: "univrm/index" },
      items: [
        {
          type: "category",
          label: "Install",
          link: { type: "doc", id: "univrm/install/index" },
          items: [
            { type: "doc", id: "univrm/install/unity_version" },
            { type: "doc", id: "univrm/install/univrm_install" },
            "univrm/install/univrm_upm",
            { type: "doc", id: "univrm/install/univrm_uninstall" },
          ],
        },
        {
          type: "category",
          label: "Error",
          link: { type: "doc", id: "univrm/error/index" },
          items: [
            "univrm/error/AvatarBuilderDupBone",
            "univrm/error/NullReferenceExceptionMeshAttachInfo",
            "univrm/error/null_reference_exeption",
            "univrm/error/multiple_scripted_importers",
            "univrm/error/could_not_include",
            "univrm/error/skinnedmeshrenderer_rootbone",
            "univrm/error/cs1061",
            //
            "univrm/error/report_error",
          ],
        },
        {
          type: "category",
          label: "Export",
          items: [
            { type: "doc", id: "univrm/export/univrm_export" },
            { type: "doc", id: "univrm/export/vrm_size" },
          ],
        },
        {
          type: "category",
          label: "Import",
          items: [
            { type: "doc", id: "univrm/import/univrm_import" },
            { type: "doc", id: "univrm/import/prefab_importer_behaviour" },
          ],
        },
        {
          type: "category",
          label: "BlendShape",
          items: [
            { type: "doc", id: "univrm/blendshape/univrm_blendshape" },
            { type: "doc", id: "univrm/blendshape/blendshape_setup" },
            { type: "doc", id: "univrm/blendshape/univrm_bake_blendshape" },
            { type: "doc", id: "univrm/blendshape/check_blendshape_normal" },
          ],
        },
        {
          type: "category",
          label: "Material",
          link: { type: "doc", id: "univrm/shaders/index" },
          items: [
            { type: "doc", id: "univrm/shaders/univrm_unlit" },
            { type: "doc", id: "univrm/shaders/univrm_standard" },
            { type: "doc", id: "univrm/shaders/shader_mtoon" },
          ],
        },
        {
          type: "category",
          label: "LookAt",
          items: [
            { type: "doc", id: "univrm/lookat/univrm_lookat" },
            { type: "doc", id: "univrm/lookat/lookat_bone" },
            { type: "doc", id: "univrm/lookat/lookat_blendshape" },
            { type: "doc", id: "univrm/lookat/lookat_uv" },
          ],
        },
        {
          type: "category",
          label: "SpringBone",
          items: [{ type: "doc", id: "univrm/springbone/univrm_secondary" }],
        },
        {
          type: "category",
          label: "Humanoid",
          items: [
            { type: "doc", id: "univrm/humanoid/humanoid_overview" },
            { type: "doc", id: "univrm/humanoid/base_model" },
            { type: "doc", id: "univrm/humanoid/meshutility_humanoid" },
            { type: "autogenerated", dirName: "unihumanoid" },
          ],
        },
        {
          type: "category",
          label: "Meta",
          items: [{ type: "doc", id: "univrm/meta/univrm_meta" }],
        },
        {
          type: "category",
          label: "FirstPerson",
          items: [{ type: "doc", id: "univrm/firstperson/univrm_firstperson" }],
        },
        {
          type: "category",
          label: "Programming",
          link: { type: "doc", id: "univrm/programming/index" },
          items: [],
        },
      ],
    },
  ],
  gltfSidebar: [
    {
      type: "category",
      label: "glTF",
      link: { type: "doc", id: "gltf/index" },
      items: [
        { type: "doc", id: "gltf/glb_import" },
        { type: "doc", id: "gltf/glb_export" },
        { type: "doc", id: "gltf/animation_exporter" },
        { type: "doc", id: "gltf/emission_glow" },
        { type: "doc", id: "gltf/mesh_utility" },
      ],
    },
  ],
  vrm1Sidebar: [
    {
      type: "category",
      label: "UniVRM-1.0",
      link: { type: "doc", id: "univrm1/index" },
      items: [
        "univrm1/urp",
        { type: "doc", id: "univrm1/folder_structure" },
        {
          type: "category",
          label: "make VRM-1.0",
          link: { type: "doc", id: "univrm1/vrm1_tutorial/index" },
          items: [
            {
              type: "doc",
              id: "univrm1/vrm1_tutorial/first_export_from_fbx",
            },
            { type: "doc", id: "univrm1/vrm1_tutorial/vrm_object" },
            { type: "doc", id: "univrm1/vrm1_tutorial/meta" },
            { type: "doc", id: "univrm1/vrm1_tutorial/expression" },
            { type: "doc", id: "univrm1/vrm1_tutorial/lookat" },
            { type: "doc", id: "univrm1/vrm1_tutorial/firstperson" },
            { type: "doc", id: "univrm1/vrm1_tutorial/springbone" },
            { type: "doc", id: "univrm1/vrm1_tutorial/material" },
            { type: "doc", id: "univrm1/vrm1_tutorial/constraint" },
          ],
        },
        {
          type: "category",
          label: "migrate to VRM-1.0 from VRM-0.x",
          link: { type: "doc", id: "univrm1/migrate_vrm0/index" },
          items: [
            { type: "doc", id: "univrm1/migrate_vrm0/feature" },
            { type: "doc", id: "univrm1/migrate_vrm0/migrate_editor" },
          ],
        },
      ],
    },
  ],

  apiSidebar: [
    {
      type: "category",
      label: "UniVRM API",
      link: { type: "doc", id: "api/index" },
      items: [
        {
          type: "category",
          label: "Project",
          // link: { type: "doc", id: "api/sample/index" },
          items: [
            "api/upm",
            "api/build",
          ],
        },
        {
          type: "category",
          label: "Sample",
          link: { type: "doc", id: "api/sample/index" },
          items: [
            "api/sample/sample_install",
            "api/sample/SimpleViewer",
            "api/sample/RuntimeExporterSample",
            "api/sample/FirstPersonSample",
            "api/sample/AnimationBridgeSample",
            {
              type: "category",
              label: "VRM10Viewer",
              link: { type: "doc", id: "api/sample/VRM10Viewer/index" },
              items: ["api/sample/VRM10Viewer/animation"],
            },
            "api/sample/Vrm10FirstPersonSample",
          ],
        },
        {
          type: "category",
          label: "RuntimeImport",
          link: { type: "doc", id: "api/runtime-import/index" },
          items: [
            "api/runtime-import/gltfdata",
            "api/0_95_dispose",
            "api/runtime-import/RuntimeGltfInstance",
            "api/runtime-import/import_glb",
            "api/runtime-import/import_vrm0",
            {
              type: "category",
              label: "vrm-1.0",
              link: { type: "doc", id: "api/vrm1_load" },
              items: [
                { type: "doc", id: "api/vrm1_migration" },
              ],
            },
            "vrma/univrm-vrma/vrma-import",
            "api/runtime-import/import_urp",
            "api/runtime-import/await_caller",
            {
              type: "category",
              label: "api update",
              items: [
                { type: "doc", id: "api/0_87_runtime_import" },
                { type: "doc", id: "api/0_82_runtime_import" },
                { type: "doc", id: "api/0_82_glb_import" },
                { type: "doc", id: "api/0_79_runtime_import" },
                { type: "doc", id: "api/0_77_runtime_import" },
                { type: "doc", id: "api/0_68_runtime_import" },
                { type: "doc", id: "api/0_44_runtime_import" },
              ],
            },
          ],
        },
        {
          type: "category",
          label: "EditorImport",
          items: [
            'api/editor-import/vrm0x',
            'api/editor-import/vrm10',
          ]
        },
        {
          type: "category",
          label: "Material/Texture",
          items: [
            "api/runtime-import/import_basisu",
            { type: "doc", id: "api/0_112_urp" },
            { type: "doc", id: "api/0_96_1_use_gamma_colorspace" },
            { type: "doc", id: "api/0_76_texture_deserializer" },
            { type: "doc", id: "api/how_to_customize_material_import" },
            { type: "doc", id: "api/texture_manipulation" },
            { type: "doc", id: "api/transparent_zwrite" },
          ],
        },
        {
          type: "category",
          label: "Expression",
          items: [{ type: "doc", id: "api/0_58_blendshape" }],
        },
        {
          type: "category",
          label: "FirstPerson",
          link: { type: "doc", id: "api/first_person" },
          items: ["api/vrm1_firstperson", "api/firstperson"],
        },
        {
          type: "category",
          label: "SpringBone",
          link: { type: "doc", id: "api/spring/index" },
          items: [
            "api/spring/spring_and_scaling",
            {
              type: "category",
              label: "vrm-1.0",
              items: [
                "api/spring/vrm1_springbone",
                "api/spring/VRMC_springBone_extended_collider",
              ]
            },
            {
              type: "category",
              label: "vrm-0.x",
              items: [
                "api/fast_spring_bone",
                "api/0_106_spring_manual_update",
              ]
            },
          ],
        },
        {
          type: "category",
          label: "Humanoid",
          link: { type: "doc", id: "api/humanoid/index" },
          items: [
            "api/humanoid/humanoid_animation",
            "vrma/univrm-vrma/retarget",
            { type: "doc", id: "api/vrm1_controlrig" },
          ],
        },
        {
          type: "category",
          label: "Component",
          link: { type: "doc", id: "api/component/index" },
          items: [
            { type: "doc", id: "api/runtime_resource_management" },
          ],
        },
        {
          type: "category",
          label: "Other",
          items: [
            { type: "doc", id: "api/api_update" },
            { type: "doc", id: "api/0_36_update" },
            { type: "doc", id: "api/0_95_highlevel" },
            { type: "doc", id: "api/how_to_impl_extension" },
            { type: "doc", id: "api/coordinate" },
            { type: "doc", id: "api/scripted_importer" },
            { type: "doc", id: "api/format" },
            { type: "doc", id: "api/mesh/bake" },
          ],
        },
      ],
    },
  ],
  releaseSidebar: [
    {
      type: "category",
      label: "ReleaseNote",
      link: { type: "doc", id: "release/index" },
      items: [
        {
          type: "category",
          label: "~v0.55(Unity-5.6)",
          // link: { type: 'doc', id: 'release/055/index' },
          items: [{ type: "autogenerated", dirName: "release/055" }],
        },
        {
          type: "category",
          label: "v0.56(Unity2018.4)~",
          // link: { type: 'doc', id: 'release/056/index' },
          items: [{ type: "autogenerated", dirName: "release/056" }],
        },
        {
          type: "category",
          label: "v0.68(Unity2018.4)~",
          // link: { type: 'doc', id: 'release/068/index' },
          items: [{ type: "autogenerated", dirName: "release/068" }],
        },
        {
          type: "category",
          label: "v0.75(Unity2019.4)~",
          // link: { type: 'doc', id: 'release/079/index' },
          items: [{ type: "autogenerated", dirName: "release/079" }],
        },
        {
          type: "category",
          label: "v0.100(Unity2020.3)~",
          // link: { type: 'doc', id: 'release/100/index' },
          items: [{ type: "autogenerated", dirName: "release/100" }],
        },
        {
          type: "category",
          label: "v0.112(Unity2021.3)~",
          // link: { type: 'doc', id: 'release/112/index' },
          items: [{ type: "autogenerated", dirName: "release/112" }],
        },
        { type: "doc", id: "release/how_to_release" },
        { type: "doc", id: "release/how_to_translation" },
      ],
    },
  ],
};

export default sidebars;
