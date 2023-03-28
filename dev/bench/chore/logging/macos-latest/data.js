window.BENCHMARK_DATA = {
  "lastUpdate": 1679986727379,
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
          "id": "eb69f758d4a8760b522726611ef3782e919b6455",
          "message": "[skip changelog] Cleaned up some logs and added more info",
          "timestamp": "2023-03-28T15:41:23+09:00",
          "tree_id": "b6d2f51d55bd4171b9f34d3658ca372d6c5850a5",
          "url": "https://github.com/greymistcube/libplanet/commit/eb69f758d4a8760b522726611ef3782e919b6455"
        },
        "date": 1679986517396,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 118305.41237113402,
            "unit": "ns",
            "range": "± 8949.833115009018"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 94974.83157894737,
            "unit": "ns",
            "range": "± 10886.0555657154"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 199022.08333333334,
            "unit": "ns",
            "range": "± 18871.808564582403"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 178834.03191489363,
            "unit": "ns",
            "range": "± 15396.137375141836"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3463077.076923077,
            "unit": "ns",
            "range": "± 94361.77814811381"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9386019.733333332,
            "unit": "ns",
            "range": "± 151553.76847766258"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15873.261363636364,
            "unit": "ns",
            "range": "± 1360.3558315290636"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 48984.134020618556,
            "unit": "ns",
            "range": "± 5492.648051465526"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 48739.46315789474,
            "unit": "ns",
            "range": "± 6333.081826528105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 102262.71276595745,
            "unit": "ns",
            "range": "± 17046.283673198304"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5976.393258426966,
            "unit": "ns",
            "range": "± 655.7669108133401"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15507.011363636364,
            "unit": "ns",
            "range": "± 1466.1815367545585"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4787108.915364583,
            "unit": "ns",
            "range": "± 99382.68712569591"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6161444.46,
            "unit": "ns",
            "range": "± 160792.2152599642"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 26498552.911764707,
            "unit": "ns",
            "range": "± 839518.5567799925"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6305637.819148936,
            "unit": "ns",
            "range": "± 364011.8377926566"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 28745716.861111112,
            "unit": "ns",
            "range": "± 953706.5122841558"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6554687.075284091,
            "unit": "ns",
            "range": "± 157237.2136476555"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1903275.8442708333,
            "unit": "ns",
            "range": "± 11016.483428693064"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1224596.9544270833,
            "unit": "ns",
            "range": "± 9126.270444437685"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2618121.390885417,
            "unit": "ns",
            "range": "± 36889.41383503426"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 764401.7387369792,
            "unit": "ns",
            "range": "± 4001.8677698340816"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 693334.5201171875,
            "unit": "ns",
            "range": "± 4464.152832732291"
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
          "id": "8902e1d814122f6a7b5c54230844e9bf49094bdf",
          "message": "Cleaned up some logs and added more info",
          "timestamp": "2023-03-28T15:40:24+09:00",
          "tree_id": "b6d2f51d55bd4171b9f34d3658ca372d6c5850a5",
          "url": "https://github.com/greymistcube/libplanet/commit/8902e1d814122f6a7b5c54230844e9bf49094bdf"
        },
        "date": 1679986713773,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 128341.54444444444,
            "unit": "ns",
            "range": "± 10082.832477417513"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 130193.68556701031,
            "unit": "ns",
            "range": "± 15979.724999804374"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 260824.98958333334,
            "unit": "ns",
            "range": "± 45176.59229349335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 244785.52222222224,
            "unit": "ns",
            "range": "± 23324.84104608954"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3724798.5161290322,
            "unit": "ns",
            "range": "± 169646.87743716376"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11992193.529411765,
            "unit": "ns",
            "range": "± 486479.7797959275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17808.47311827957,
            "unit": "ns",
            "range": "± 3137.7689581286268"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 54870.03157894737,
            "unit": "ns",
            "range": "± 9295.67674330457"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 57779.01190476191,
            "unit": "ns",
            "range": "± 5078.080477622028"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 124640.01075268818,
            "unit": "ns",
            "range": "± 17339.179086113563"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9373.794736842105,
            "unit": "ns",
            "range": "± 995.3344019878522"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21790.194736842106,
            "unit": "ns",
            "range": "± 4839.932943252909"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5184251.079241072,
            "unit": "ns",
            "range": "± 374806.6593808984"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6014790.333333333,
            "unit": "ns",
            "range": "± 171373.23353621224"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 30543272.17647059,
            "unit": "ns",
            "range": "± 3645397.4490262675"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7608682.274193549,
            "unit": "ns",
            "range": "± 726255.2084219152"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 33040426.318181816,
            "unit": "ns",
            "range": "± 1730044.4168535527"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7414289.276875,
            "unit": "ns",
            "range": "± 296628.54805659974"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2115382.103125,
            "unit": "ns",
            "range": "± 89038.88227844391"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1331717.4533854167,
            "unit": "ns",
            "range": "± 16272.794790593636"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2685420.921811996,
            "unit": "ns",
            "range": "± 121175.24353007214"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 955740.4971354167,
            "unit": "ns",
            "range": "± 10677.242703824179"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 791412.6576377467,
            "unit": "ns",
            "range": "± 26744.8267489993"
          }
        ]
      }
    ]
  }
}