window.BENCHMARK_DATA = {
  "lastUpdate": 1694144521659,
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
        "date": 1694144507389,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8979063.84,
            "unit": "ns",
            "range": "± 530759.0098176389"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20909552.1,
            "unit": "ns",
            "range": "± 414545.5216290169"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52452760.515151516,
            "unit": "ns",
            "range": "± 1552891.7612051861"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 108099027.50943395,
            "unit": "ns",
            "range": "± 4478636.062817075"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 214797676.52083334,
            "unit": "ns",
            "range": "± 8478381.27585771"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 71781.22222222222,
            "unit": "ns",
            "range": "± 11509.495487510681"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 315372.5053763441,
            "unit": "ns",
            "range": "± 24955.75261626049"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 306194.4736842105,
            "unit": "ns",
            "range": "± 28644.611382085164"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 294844.5326086957,
            "unit": "ns",
            "range": "± 18468.045696123067"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4069639.9,
            "unit": "ns",
            "range": "± 93651.04035525207"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3713706.8333333335,
            "unit": "ns",
            "range": "± 107753.60870349742"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18954.89010989011,
            "unit": "ns",
            "range": "± 2503.9548604848183"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 94717.1170212766,
            "unit": "ns",
            "range": "± 15493.372263965475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 89316.40625,
            "unit": "ns",
            "range": "± 14352.695840358885"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 95008.42783505155,
            "unit": "ns",
            "range": "± 12808.835868134984"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8654.684210526315,
            "unit": "ns",
            "range": "± 1284.6633739320619"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25265.290322580644,
            "unit": "ns",
            "range": "± 5390.128675927645"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1940045.6868131869,
            "unit": "ns",
            "range": "± 421039.26060968905"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3349808.7395833335,
            "unit": "ns",
            "range": "± 386662.85752587975"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2255891.6836734693,
            "unit": "ns",
            "range": "± 309374.5388979789"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5734366.423076923,
            "unit": "ns",
            "range": "± 447794.2150588875"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3404183.1263157893,
            "unit": "ns",
            "range": "± 242128.14039217148"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3671765.211340206,
            "unit": "ns",
            "range": "± 255499.49194384253"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4552747.224489796,
            "unit": "ns",
            "range": "± 307427.77232184773"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3856339.9315068494,
            "unit": "ns",
            "range": "± 191275.3933785531"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6857178.560975609,
            "unit": "ns",
            "range": "± 347335.84698038676"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5988078.282366072,
            "unit": "ns",
            "range": "± 164982.75744922974"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1897031.9546875,
            "unit": "ns",
            "range": "± 25569.819333037492"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1067568.6283482143,
            "unit": "ns",
            "range": "± 25099.726595303877"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2978217.687355324,
            "unit": "ns",
            "range": "± 123772.20955444482"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 852194.2877261513,
            "unit": "ns",
            "range": "± 17210.438030437017"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 743444.293359375,
            "unit": "ns",
            "range": "± 12074.24056234587"
          }
        ]
      }
    ]
  }
}