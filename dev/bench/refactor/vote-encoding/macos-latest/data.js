window.BENCHMARK_DATA = {
  "lastUpdate": 1678869037594,
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
      }
    ]
  }
}