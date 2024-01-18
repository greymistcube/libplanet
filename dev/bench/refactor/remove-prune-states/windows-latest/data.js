window.BENCHMARK_DATA = {
  "lastUpdate": 1705571725576,
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
          "id": "93d8326c18a2645b78951215485e432d2447f372",
          "message": "Removed IStateStore.PruneStates()",
          "timestamp": "2024-01-18T18:43:16+09:00",
          "tree_id": "13ba707ced2bbac5cac8e6e607cd96971834bd13",
          "url": "https://github.com/greymistcube/libplanet/commit/93d8326c18a2645b78951215485e432d2447f372"
        },
        "date": 1705571703905,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 946716.8421052631,
            "unit": "ns",
            "range": "± 96325.6860781809"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1679634.6153846155,
            "unit": "ns",
            "range": "± 61186.87506517495"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1302130.303030303,
            "unit": "ns",
            "range": "± 105011.46725967448"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5098000,
            "unit": "ns",
            "range": "± 151990.12161639164"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33991.836734693876,
            "unit": "ns",
            "range": "± 1359.5092151664323"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5108440,
            "unit": "ns",
            "range": "± 44963.26754775979"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13453835.714285715,
            "unit": "ns",
            "range": "± 155891.74674528703"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32862992.85714286,
            "unit": "ns",
            "range": "± 249185.29239314055"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 66795800,
            "unit": "ns",
            "range": "± 1182824.0613041315"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 128849780,
            "unit": "ns",
            "range": "± 866543.4011057958"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3350927.0368303573,
            "unit": "ns",
            "range": "± 8449.769799839682"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1086328.0078125,
            "unit": "ns",
            "range": "± 3378.184816504648"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 762746.0588727678,
            "unit": "ns",
            "range": "± 3204.0138693181043"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1911351.015625,
            "unit": "ns",
            "range": "± 4941.0556809623795"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 603255.4817708334,
            "unit": "ns",
            "range": "± 1570.5389066984012"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 571942.5260416666,
            "unit": "ns",
            "range": "± 1661.1502788549499"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2147817.6470588236,
            "unit": "ns",
            "range": "± 68705.08106386944"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2257878.787878788,
            "unit": "ns",
            "range": "± 68205.80417739277"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2756478.5714285714,
            "unit": "ns",
            "range": "± 44516.77606979589"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2888550,
            "unit": "ns",
            "range": "± 33247.642236491214"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5940640.740740741,
            "unit": "ns",
            "range": "± 164209.45643916362"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 167534.4262295082,
            "unit": "ns",
            "range": "± 7034.104663374048"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 159949.25373134328,
            "unit": "ns",
            "range": "± 7607.6590819628755"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 138900,
            "unit": "ns",
            "range": "± 4772.674413013272"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2673850,
            "unit": "ns",
            "range": "± 50300.31146358175"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2533783.3333333335,
            "unit": "ns",
            "range": "± 44311.00583484015"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9271.084337349397,
            "unit": "ns",
            "range": "± 631.7861093142373"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 49526.37362637363,
            "unit": "ns",
            "range": "± 3517.6960630767394"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43291.48936170213,
            "unit": "ns",
            "range": "± 1609.3247013730897"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 56674.489795918365,
            "unit": "ns",
            "range": "± 12504.508970062323"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2357.216494845361,
            "unit": "ns",
            "range": "± 354.2149249515319"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10453.191489361701,
            "unit": "ns",
            "range": "± 1707.5072775020578"
          }
        ]
      }
    ]
  }
}