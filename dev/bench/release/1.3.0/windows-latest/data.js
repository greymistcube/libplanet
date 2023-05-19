window.BENCHMARK_DATA = {
  "lastUpdate": 1684479077307,
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
          "id": "8bb5b811950075ca226df3541e39683eb3fd2286",
          "message": "Release 1.3.0",
          "timestamp": "2023-05-19T15:35:51+09:00",
          "tree_id": "b33c790994676a85b647569d28526a969f6cfc6e",
          "url": "https://github.com/greymistcube/libplanet/commit/8bb5b811950075ca226df3541e39683eb3fd2286"
        },
        "date": 1684479054608,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1377889.3617021276,
            "unit": "ns",
            "range": "± 116992.63506650002"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2577734.9206349207,
            "unit": "ns",
            "range": "± 117976.7174388866"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2136390.7216494847,
            "unit": "ns",
            "range": "± 153754.86921996583"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5465621.052631579,
            "unit": "ns",
            "range": "± 237065.46544365134"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46992.391304347824,
            "unit": "ns",
            "range": "± 3290.353322677585"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6711142.857142857,
            "unit": "ns",
            "range": "± 49971.03336758383"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17738313.333333332,
            "unit": "ns",
            "range": "± 144084.2901452711"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45933140,
            "unit": "ns",
            "range": "± 587729.3154894643"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 94440300,
            "unit": "ns",
            "range": "± 1164166.3276617902"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 179935300,
            "unit": "ns",
            "range": "± 3266129.922619211"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4992059.555288462,
            "unit": "ns",
            "range": "± 44744.34845387962"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1540241.6731770833,
            "unit": "ns",
            "range": "± 3700.6017540740713"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1178303.8020833333,
            "unit": "ns",
            "range": "± 3824.3885430368646"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2572926.5625,
            "unit": "ns",
            "range": "± 9201.183945036482"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 811804.6875,
            "unit": "ns",
            "range": "± 3744.9140663940034"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 764446.0611979166,
            "unit": "ns",
            "range": "± 3974.210161920812"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2911842.8571428573,
            "unit": "ns",
            "range": "± 47890.881005849995"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3422976.470588235,
            "unit": "ns",
            "range": "± 69959.6002115843"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4228146.153846154,
            "unit": "ns",
            "range": "± 147489.0894201185"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4252356.521739131,
            "unit": "ns",
            "range": "± 237599.46733963114"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6860856.521739131,
            "unit": "ns",
            "range": "± 166781.81126600696"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 280236.7088607595,
            "unit": "ns",
            "range": "± 13721.489576901738"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 270336.95652173914,
            "unit": "ns",
            "range": "± 9697.453473192552"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 229393.9393939394,
            "unit": "ns",
            "range": "± 20491.391015531168"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4069056.6666666665,
            "unit": "ns",
            "range": "± 75825.94228764667"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3687053.3333333335,
            "unit": "ns",
            "range": "± 56634.11221752016"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24576.530612244896,
            "unit": "ns",
            "range": "± 3940.342520576809"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 87323.40425531915,
            "unit": "ns",
            "range": "± 8908.33155434463"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 69082.96703296703,
            "unit": "ns",
            "range": "± 5368.779189703185"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 112131.63265306123,
            "unit": "ns",
            "range": "± 19790.00370872881"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5197.894736842105,
            "unit": "ns",
            "range": "± 1062.8123017738324"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22358.695652173912,
            "unit": "ns",
            "range": "± 2547.662241225376"
          }
        ]
      }
    ]
  }
}