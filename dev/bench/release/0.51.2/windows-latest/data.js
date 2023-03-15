window.BENCHMARK_DATA = {
  "lastUpdate": 1678866395625,
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
          "id": "d9ac9e43466be30ffab0ca9f7fa20412332985f0",
          "message": "Release 0.51.2",
          "timestamp": "2023-03-15T16:31:49+09:00",
          "tree_id": "c71203d3f8c74634e228142d5310896d1e4e9475",
          "url": "https://github.com/greymistcube/libplanet/commit/d9ac9e43466be30ffab0ca9f7fa20412332985f0"
        },
        "date": 1678866372998,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1284849.3827160494,
            "unit": "ns",
            "range": "± 67216.19991389128"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2307135.294117647,
            "unit": "ns",
            "range": "± 73344.71075248317"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2012484,
            "unit": "ns",
            "range": "± 97721.44089610432"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4689006.666666667,
            "unit": "ns",
            "range": "± 137494.46868707205"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41514.28571428572,
            "unit": "ns",
            "range": "± 2134.843411348346"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 6948393.333333333,
            "unit": "ns",
            "range": "± 26616.36088323621"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 17748266.666666668,
            "unit": "ns",
            "range": "± 83964.01156504636"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 46063293.333333336,
            "unit": "ns",
            "range": "± 286900.16547987727"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 91813092.85714285,
            "unit": "ns",
            "range": "± 553033.5428890724"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 182799513.33333334,
            "unit": "ns",
            "range": "± 1257064.0339791006"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4890036.774553572,
            "unit": "ns",
            "range": "± 12102.64081018241"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1604284.3900240385,
            "unit": "ns",
            "range": "± 1013.0890987609204"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1146763.84765625,
            "unit": "ns",
            "range": "± 1273.4314099499697"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2541938.4375,
            "unit": "ns",
            "range": "± 6279.770713278951"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 824322.96875,
            "unit": "ns",
            "range": "± 8732.28006916972"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 739313.9518229166,
            "unit": "ns",
            "range": "± 597.3150793543605"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2947900,
            "unit": "ns",
            "range": "± 43763.43749682447"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4624610.52631579,
            "unit": "ns",
            "range": "± 56901.30729543763"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 21185393.333333332,
            "unit": "ns",
            "range": "± 318396.92089920596"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5666594.444444444,
            "unit": "ns",
            "range": "± 118613.26417356743"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 24333500,
            "unit": "ns",
            "range": "± 250459.66883769073"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 171644.18604651163,
            "unit": "ns",
            "range": "± 6292.145607462923"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 170175.75757575757,
            "unit": "ns",
            "range": "± 4658.462078775992"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 140357.14285714287,
            "unit": "ns",
            "range": "± 2322.7021020666975"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 10273692.857142856,
            "unit": "ns",
            "range": "± 33866.31442521098"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8304040,
            "unit": "ns",
            "range": "± 75468.42102116998"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16825.531914893618,
            "unit": "ns",
            "range": "± 1370.8906272470147"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 47000,
            "unit": "ns",
            "range": "± 4298.273827333112"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 34236.84210526316,
            "unit": "ns",
            "range": "± 764.6426371666043"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 84740.86021505376,
            "unit": "ns",
            "range": "± 9935.687067981584"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4751.030927835051,
            "unit": "ns",
            "range": "± 686.8549770149243"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17860,
            "unit": "ns",
            "range": "± 1633.5837121742036"
          }
        ]
      }
    ]
  }
}