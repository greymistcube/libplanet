window.BENCHMARK_DATA = {
  "lastUpdate": 1678869404665,
  "repoUrl": "https://github.com/greymistcube/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "ecf372205ae8a2af7dc0a83eae4a253349dec33d",
          "message": "Updated Vote.Encoded and Proposal.Encoded",
          "timestamp": "2023-03-15T17:11:34+09:00",
          "tree_id": "f0357afcb5074dbb5f4705f164f6606bb105f856",
          "url": "https://github.com/greymistcube/libplanet/commit/ecf372205ae8a2af7dc0a83eae4a253349dec33d"
        },
        "date": 1678869017716,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 8693274.666666666,
            "unit": "ns",
            "range": "± 88461.13309460235"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 21301203.5,
            "unit": "ns",
            "range": "± 196356.25902031883"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 54081692.23809524,
            "unit": "ns",
            "range": "± 1249799.3054812003"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 103071217.16666667,
            "unit": "ns",
            "range": "± 1027958.0499625505"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 211756466.15384614,
            "unit": "ns",
            "range": "± 529994.6880104627"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 84039.76344086022,
            "unit": "ns",
            "range": "± 10639.189345137738"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 230701.7962962963,
            "unit": "ns",
            "range": "± 8404.479945590629"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 226118.70212765958,
            "unit": "ns",
            "range": "± 8709.212588365448"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 213621.79787234042,
            "unit": "ns",
            "range": "± 12854.370705231833"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12769018.2,
            "unit": "ns",
            "range": "± 231922.81787242435"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10412560.52173913,
            "unit": "ns",
            "range": "± 261118.0725592908"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24076.56842105263,
            "unit": "ns",
            "range": "± 2724.015538168542"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 63246.89361702128,
            "unit": "ns",
            "range": "± 6809.209191318887"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 61553.279569892475,
            "unit": "ns",
            "range": "± 4312.710472155914"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 110818.36082474227,
            "unit": "ns",
            "range": "± 21928.609196086727"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8146.04255319149,
            "unit": "ns",
            "range": "± 1075.2058259060113"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20185.19191919192,
            "unit": "ns",
            "range": "± 3996.5217011407735"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1608003.7448979593,
            "unit": "ns",
            "range": "± 142171.95847471943"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2885154.2972972975,
            "unit": "ns",
            "range": "± 137097.86767150974"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2464095.289473684,
            "unit": "ns",
            "range": "± 200625.0402821936"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6557809.4639175255,
            "unit": "ns",
            "range": "± 545981.4190475995"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3588411.565217391,
            "unit": "ns",
            "range": "± 90032.01953791273"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5136052.738095238,
            "unit": "ns",
            "range": "± 185619.64551341895"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 26142370.033898305,
            "unit": "ns",
            "range": "± 1154535.2040794413"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6519112.5,
            "unit": "ns",
            "range": "± 185158.61459420258"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 28828357.5,
            "unit": "ns",
            "range": "± 410361.6410309326"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6665668.324013158,
            "unit": "ns",
            "range": "± 147286.2822238015"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2017601.9190848214,
            "unit": "ns",
            "range": "± 13390.344726557156"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1288121.781529018,
            "unit": "ns",
            "range": "± 19617.849517095026"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2666180.83092152,
            "unit": "ns",
            "range": "± 146401.81707264064"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 878050.0649126838,
            "unit": "ns",
            "range": "± 13993.648796800604"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 775191.3662553267,
            "unit": "ns",
            "range": "± 17318.309500555384"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "6699718613fe2592545afbc8a13afa8ae7494b7a",
          "message": "Changelog",
          "timestamp": "2023-03-15T17:12:52+09:00",
          "tree_id": "b9aa048ef68261e6178dff40c5331176afa8c1db",
          "url": "https://github.com/greymistcube/libplanet/commit/6699718613fe2592545afbc8a13afa8ae7494b7a"
        },
        "date": 1678869060758,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 8946778.62745098,
            "unit": "ns",
            "range": "± 324753.1516071221"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 22864016.8,
            "unit": "ns",
            "range": "± 266647.81285867374"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 57793481.46666667,
            "unit": "ns",
            "range": "± 968505.8649677028"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 113774120.78947368,
            "unit": "ns",
            "range": "± 3923696.107179603"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 233354919.70833334,
            "unit": "ns",
            "range": "± 5886177.22928252"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 72150.69791666667,
            "unit": "ns",
            "range": "± 7666.116866644302"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 239838.12765957447,
            "unit": "ns",
            "range": "± 19590.388495455692"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 237517.90588235293,
            "unit": "ns",
            "range": "± 12827.070892511378"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 227314.29292929292,
            "unit": "ns",
            "range": "± 13496.33208769998"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 13605689.285714285,
            "unit": "ns",
            "range": "± 95931.51352712204"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10655467.866666667,
            "unit": "ns",
            "range": "± 137764.08297358343"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25005.614583333332,
            "unit": "ns",
            "range": "± 2437.748524959656"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 67667.82978723405,
            "unit": "ns",
            "range": "± 6554.631875588401"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 55855.895833333336,
            "unit": "ns",
            "range": "± 5283.465709628912"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 129066.09278350516,
            "unit": "ns",
            "range": "± 17568.063210270262"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7169.515789473684,
            "unit": "ns",
            "range": "± 788.3751788459482"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24768.709677419356,
            "unit": "ns",
            "range": "± 2169.7595417797934"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1774142.0531914893,
            "unit": "ns",
            "range": "± 110493.99638391948"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3249733.5476190476,
            "unit": "ns",
            "range": "± 113384.84790541575"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2902807.3157894737,
            "unit": "ns",
            "range": "± 340947.0016254558"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7266799.393442623,
            "unit": "ns",
            "range": "± 312813.44440189266"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3829323.5897435895,
            "unit": "ns",
            "range": "± 122327.90777115975"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5981683.903225807,
            "unit": "ns",
            "range": "± 151394.48639549917"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 27363285.94736842,
            "unit": "ns",
            "range": "± 608243.4106733069"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7384973.4,
            "unit": "ns",
            "range": "± 218746.16338004573"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 32467140.916666668,
            "unit": "ns",
            "range": "± 476339.111057822"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7446603.294270833,
            "unit": "ns",
            "range": "± 52548.36562022573"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2304000.171875,
            "unit": "ns",
            "range": "± 20647.409274227197"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1448475.9012920673,
            "unit": "ns",
            "range": "± 10909.251474964965"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2844496.9791666665,
            "unit": "ns",
            "range": "± 20055.148319762153"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1013896.67734375,
            "unit": "ns",
            "range": "± 8986.923987415752"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 863259.2708984375,
            "unit": "ns",
            "range": "± 6320.387203451408"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "8eca045037afe35820c64f54f556c3d96723ad86",
          "message": "Changelog",
          "timestamp": "2023-03-15T17:13:13+09:00",
          "tree_id": "73ecc7d5746324bbbdab21cef6f31d1c2b82ce1b",
          "url": "https://github.com/greymistcube/libplanet/commit/8eca045037afe35820c64f54f556c3d96723ad86"
        },
        "date": 1678869230183,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 9423297.418181818,
            "unit": "ns",
            "range": "± 386001.98605100706"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 22968492.523809522,
            "unit": "ns",
            "range": "± 1219961.5206992766"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 53285074.35714286,
            "unit": "ns",
            "range": "± 940846.1668806116"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 116749502.92682926,
            "unit": "ns",
            "range": "± 4196517.605235926"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 230253564.2857143,
            "unit": "ns",
            "range": "± 3994163.9423370124"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 77736.01075268818,
            "unit": "ns",
            "range": "± 11947.68256726567"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 220587.90476190476,
            "unit": "ns",
            "range": "± 13525.525729816525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 241904.05263157896,
            "unit": "ns",
            "range": "± 28836.079658874318"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 221415.2888888889,
            "unit": "ns",
            "range": "± 21571.093754465026"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 13157836.698113207,
            "unit": "ns",
            "range": "± 542437.7716858613"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10270309.714285715,
            "unit": "ns",
            "range": "± 177249.54598289626"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23089.17,
            "unit": "ns",
            "range": "± 5539.453406385431"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52581.408602150535,
            "unit": "ns",
            "range": "± 6907.195149351837"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 60006.307692307695,
            "unit": "ns",
            "range": "± 5033.239033757504"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 128638.23195876289,
            "unit": "ns",
            "range": "± 17132.932669712605"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7889.984536082474,
            "unit": "ns",
            "range": "± 1276.4327580001527"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24903.90625,
            "unit": "ns",
            "range": "± 3732.167679930582"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1703007.3736263737,
            "unit": "ns",
            "range": "± 223384.34888463965"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3033061.315217391,
            "unit": "ns",
            "range": "± 202508.951028052"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2594871.612359551,
            "unit": "ns",
            "range": "± 203806.97567096748"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6401349,
            "unit": "ns",
            "range": "± 572867.1761667886"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3683877.5714285714,
            "unit": "ns",
            "range": "± 61591.42545306659"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5571476.7191011235,
            "unit": "ns",
            "range": "± 399671.0372224885"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 26938453.93478261,
            "unit": "ns",
            "range": "± 939978.1008176828"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7032362.125,
            "unit": "ns",
            "range": "± 506857.96872464026"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 30016209.14736842,
            "unit": "ns",
            "range": "± 1786971.6325469613"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7088139.395951704,
            "unit": "ns",
            "range": "± 171928.66019824194"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2130641.743840144,
            "unit": "ns",
            "range": "± 58060.26596795134"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1347294.7315104166,
            "unit": "ns",
            "range": "± 21427.872160501567"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2868618.139467593,
            "unit": "ns",
            "range": "± 78308.11649306983"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 932395.842578125,
            "unit": "ns",
            "range": "± 9756.975197259382"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 747800.9026442308,
            "unit": "ns",
            "range": "± 8403.921065048029"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "2d4047674b5f838cf461806ce0c6442baedc8b69",
          "message": "Changelog",
          "timestamp": "2023-03-15T17:16:01+09:00",
          "tree_id": "5f1e0dc67d0e5ebed283e11d5b73d4e0dc48ab97",
          "url": "https://github.com/greymistcube/libplanet/commit/2d4047674b5f838cf461806ce0c6442baedc8b69"
        },
        "date": 1678869378237,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 10387026.806818182,
            "unit": "ns",
            "range": "± 1254528.872744082"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 22483533.189655174,
            "unit": "ns",
            "range": "± 980138.2683044337"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 57986794.35897436,
            "unit": "ns",
            "range": "± 2016792.6790327453"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 112661158.42105263,
            "unit": "ns",
            "range": "± 2468469.4206871353"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 235570916.07692307,
            "unit": "ns",
            "range": "± 10907044.334486686"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 84603.03488372093,
            "unit": "ns",
            "range": "± 6802.588484320076"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 223040.32258064515,
            "unit": "ns",
            "range": "± 20705.458809297284"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 207260.63043478262,
            "unit": "ns",
            "range": "± 12796.919239674675"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 206121.2,
            "unit": "ns",
            "range": "± 19090.970761849363"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12778531.316666666,
            "unit": "ns",
            "range": "± 570168.0060430446"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10302686.285714285,
            "unit": "ns",
            "range": "± 376740.8141870952"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22721.918367346938,
            "unit": "ns",
            "range": "± 4288.637689935516"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61990.29761904762,
            "unit": "ns",
            "range": "± 3485.7879950594074"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 60624.22680412371,
            "unit": "ns",
            "range": "± 5618.522654846561"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 129121.89795918367,
            "unit": "ns",
            "range": "± 17942.264860361898"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7925.2,
            "unit": "ns",
            "range": "± 1085.6288167046666"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24473.52105263158,
            "unit": "ns",
            "range": "± 3675.959038212464"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1516475.3695652173,
            "unit": "ns",
            "range": "± 93966.2941093355"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2860790.0555555555,
            "unit": "ns",
            "range": "± 150106.24106162274"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2620003.782608696,
            "unit": "ns",
            "range": "± 278183.1524123901"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6876784.976744186,
            "unit": "ns",
            "range": "± 782869.230186569"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3732889.777777778,
            "unit": "ns",
            "range": "± 337580.33490923786"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5648179.005882353,
            "unit": "ns",
            "range": "± 428767.71970904135"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 26998815.94642857,
            "unit": "ns",
            "range": "± 1086890.2705907917"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7104004.527472528,
            "unit": "ns",
            "range": "± 738494.0502144789"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 31774634.494505495,
            "unit": "ns",
            "range": "± 2115310.871815039"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7087466.395487882,
            "unit": "ns",
            "range": "± 282268.5749114661"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1965117.3282552084,
            "unit": "ns",
            "range": "± 31759.343970531358"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1299732.3009314905,
            "unit": "ns",
            "range": "± 5526.060148546275"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2850595.6628989363,
            "unit": "ns",
            "range": "± 101654.16987865955"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 804755.970288086,
            "unit": "ns",
            "range": "± 28357.40873000484"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 753451.8177315848,
            "unit": "ns",
            "range": "± 12306.900755088658"
          }
        ]
      }
    ]
  }
}