window.BENCHMARK_DATA = {
  "lastUpdate": 1707211611754,
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
          "id": "aac31ffda5d567b4aee940afd7eb9984121c41f4",
          "message": "Release 4.0.3",
          "timestamp": "2024-02-06T18:13:39+09:00",
          "tree_id": "52802fbf3945f1888b4771fd252a9ead9b4186dc",
          "url": "https://github.com/greymistcube/libplanet/commit/aac31ffda5d567b4aee940afd7eb9984121c41f4"
        },
        "date": 1707211589239,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 963064.2105263158,
            "unit": "ns",
            "range": "± 125313.83998873057"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1679693.5483870967,
            "unit": "ns",
            "range": "± 63305.84263551591"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1474557.5268817204,
            "unit": "ns",
            "range": "± 134534.16023009623"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10918303.296703296,
            "unit": "ns",
            "range": "± 1010018.6733642931"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34494.117647058825,
            "unit": "ns",
            "range": "± 1830.19338954583"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4975569.230769231,
            "unit": "ns",
            "range": "± 20059.34464762764"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13180246.153846154,
            "unit": "ns",
            "range": "± 153329.3275675195"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32025607.14285714,
            "unit": "ns",
            "range": "± 441840.3948944002"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 64294092.85714286,
            "unit": "ns",
            "range": "± 557167.7781619986"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 126721660,
            "unit": "ns",
            "range": "± 964045.2210792366"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3329821.9308035714,
            "unit": "ns",
            "range": "± 4364.914961283116"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1093472.578125,
            "unit": "ns",
            "range": "± 4356.074535591403"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 751788.3203125,
            "unit": "ns",
            "range": "± 1812.2378312097346"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1940043.373325893,
            "unit": "ns",
            "range": "± 1583.4496725233998"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 599231.25,
            "unit": "ns",
            "range": "± 1686.928938180725"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 555359.5982142857,
            "unit": "ns",
            "range": "± 761.5526694912679"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2064414.2857142857,
            "unit": "ns",
            "range": "± 24435.184504280744"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2211392.3076923075,
            "unit": "ns",
            "range": "± 106816.27480602647"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2760170,
            "unit": "ns",
            "range": "± 63177.82838939623"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2791727.777777778,
            "unit": "ns",
            "range": "± 131250.28474520124"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12523928.57142857,
            "unit": "ns",
            "range": "± 1569473.0887421146"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 169465.67164179104,
            "unit": "ns",
            "range": "± 7705.852798042064"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 167985.45454545456,
            "unit": "ns",
            "range": "± 6673.952079812707"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 143018.5185185185,
            "unit": "ns",
            "range": "± 3879.23833097298"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2788653.846153846,
            "unit": "ns",
            "range": "± 38659.33728058927"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2520346.6666666665,
            "unit": "ns",
            "range": "± 37877.86512815455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10154.639175257733,
            "unit": "ns",
            "range": "± 1641.9640563055307"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 53486.458333333336,
            "unit": "ns",
            "range": "± 5814.494045811031"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43263.82978723404,
            "unit": "ns",
            "range": "± 1543.9116797102113"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 51900,
            "unit": "ns",
            "range": "± 9038.878176041466"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1957.4468085106382,
            "unit": "ns",
            "range": "± 289.7864848775074"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10443.617021276596,
            "unit": "ns",
            "range": "± 1633.6882548747672"
          }
        ]
      }
    ]
  }
}