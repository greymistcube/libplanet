window.BENCHMARK_DATA = {
  "lastUpdate": 1694144830022,
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
          "id": "1236953b4d868d2d6b730090f3e57d866724f075",
          "message": "Release 3.3.1",
          "timestamp": "2023-09-08T12:23:09+09:00",
          "tree_id": "fab2e0507c99a95eceeee8893e42c3adbf3b822b",
          "url": "https://github.com/greymistcube/libplanet/commit/1236953b4d868d2d6b730090f3e57d866724f075"
        },
        "date": 1694144804819,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1520933.3333333333,
            "unit": "ns",
            "range": "± 189927.08333056697"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3011489.898989899,
            "unit": "ns",
            "range": "± 375297.8007991568"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2010128.2828282828,
            "unit": "ns",
            "range": "± 207899.34723243912"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5470004.081632653,
            "unit": "ns",
            "range": "± 594770.9171611321"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 57702.247191011236,
            "unit": "ns",
            "range": "± 10936.978325513299"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7203257.291666667,
            "unit": "ns",
            "range": "± 505562.68677787273"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22217045,
            "unit": "ns",
            "range": "± 2343014.6369505776"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56857354,
            "unit": "ns",
            "range": "± 5029497.427137208"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 114075809.59595959,
            "unit": "ns",
            "range": "± 11091048.123865565"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 221322168,
            "unit": "ns",
            "range": "± 22600287.860028185"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4867366.327335859,
            "unit": "ns",
            "range": "± 328384.3439060481"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1516419.5234375,
            "unit": "ns",
            "range": "± 94636.26373786775"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1159843.396484375,
            "unit": "ns",
            "range": "± 76858.24789839899"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2855981.94921875,
            "unit": "ns",
            "range": "± 180290.99165894586"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1006035.2810329861,
            "unit": "ns",
            "range": "± 41962.73958168075"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 934068.1966145834,
            "unit": "ns",
            "range": "± 39174.96297089789"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3159440.8163265307,
            "unit": "ns",
            "range": "± 426533.8593385212"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3159546.8085106383,
            "unit": "ns",
            "range": "± 375601.05142080545"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4249203.0612244895,
            "unit": "ns",
            "range": "± 588995.3470584564"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3952747.9591836734,
            "unit": "ns",
            "range": "± 512289.1844465845"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6857106.25,
            "unit": "ns",
            "range": "± 850629.638848096"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 293624.2105263158,
            "unit": "ns",
            "range": "± 49327.63826676161"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 281705.3191489362,
            "unit": "ns",
            "range": "± 37366.8140012863"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 230431.44329896907,
            "unit": "ns",
            "range": "± 37182.1118782745"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4344083.673469388,
            "unit": "ns",
            "range": "± 581264.5902292758"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3797673.4693877553,
            "unit": "ns",
            "range": "± 545200.7330230493"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26542.85714285714,
            "unit": "ns",
            "range": "± 9281.141504624631"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 92915.73033707865,
            "unit": "ns",
            "range": "± 15156.950842288383"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 94353.68421052632,
            "unit": "ns",
            "range": "± 23410.82133183565"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 93004.21052631579,
            "unit": "ns",
            "range": "± 21936.256375803834"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5507.058823529412,
            "unit": "ns",
            "range": "± 1139.944467663115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 28621.649484536083,
            "unit": "ns",
            "range": "± 9574.893676565069"
          }
        ]
      }
    ]
  }
}