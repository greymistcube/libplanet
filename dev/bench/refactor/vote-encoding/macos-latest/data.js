window.BENCHMARK_DATA = {
  "lastUpdate": 1678869089011,
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
      }
    ]
  }
}