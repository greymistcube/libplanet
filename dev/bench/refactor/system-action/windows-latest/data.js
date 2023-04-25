window.BENCHMARK_DATA = {
  "lastUpdate": 1682414664393,
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
          "id": "4ae90c4687157fd081e727e541775595a2de8a89",
          "message": "Additional tool in preparation for adding Registry to ActionTypeLoader",
          "timestamp": "2023-04-25T18:04:40+09:00",
          "tree_id": "7ba5f549a63ce670d2474b5a812ea7f0d4952b89",
          "url": "https://github.com/greymistcube/libplanet/commit/4ae90c4687157fd081e727e541775595a2de8a89"
        },
        "date": 1682414541326,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1383857,
            "unit": "ns",
            "range": "± 120308.20039306623"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2647924.242424242,
            "unit": "ns",
            "range": "± 172280.1367794818"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2211930.5263157897,
            "unit": "ns",
            "range": "± 145465.23901041903"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5584536.363636363,
            "unit": "ns",
            "range": "± 365175.61429596844"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49540.425531914894,
            "unit": "ns",
            "range": "± 3454.3511333475344"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7237057.142857143,
            "unit": "ns",
            "range": "± 112107.20634413167"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19846700,
            "unit": "ns",
            "range": "± 160135.42483071724"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49975286.666666664,
            "unit": "ns",
            "range": "± 379255.9028011612"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99917878.57142857,
            "unit": "ns",
            "range": "± 1260794.784850213"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 200942520,
            "unit": "ns",
            "range": "± 1501427.268206584"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4742958.958333333,
            "unit": "ns",
            "range": "± 20825.928335165227"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1527101.5625,
            "unit": "ns",
            "range": "± 5494.887986167242"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1222547.4190848214,
            "unit": "ns",
            "range": "± 3017.6993256448745"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2631803.292410714,
            "unit": "ns",
            "range": "± 5328.3339235847125"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 869385.8984375,
            "unit": "ns",
            "range": "± 2639.5238465316456"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 761586.1853966346,
            "unit": "ns",
            "range": "± 931.7305411978273"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3222614.814814815,
            "unit": "ns",
            "range": "± 87815.67103753224"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3409240,
            "unit": "ns",
            "range": "± 46820.261181916285"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3960361.111111111,
            "unit": "ns",
            "range": "± 83892.91590992222"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4407531.25,
            "unit": "ns",
            "range": "± 72822.98830039866"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6739690.909090909,
            "unit": "ns",
            "range": "± 209580.15376526644"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 270478.26086956525,
            "unit": "ns",
            "range": "± 10427.69630558667"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 252224.32432432432,
            "unit": "ns",
            "range": "± 8527.029097242792"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 208511.76470588235,
            "unit": "ns",
            "range": "± 4262.7576685962895"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4003984.6153846155,
            "unit": "ns",
            "range": "± 45123.715977185915"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3528340,
            "unit": "ns",
            "range": "± 61699.33780612468"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21314.285714285714,
            "unit": "ns",
            "range": "± 2220.023683350963"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 90131.81818181818,
            "unit": "ns",
            "range": "± 8138.80053886952"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 79670.52631578948,
            "unit": "ns",
            "range": "± 6202.982701966518"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 96667.74193548386,
            "unit": "ns",
            "range": "± 12023.33023108499"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7371.428571428572,
            "unit": "ns",
            "range": "± 1036.250178764612"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19416.494845360823,
            "unit": "ns",
            "range": "± 1855.6602830018894"
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
          "id": "7b2175f813edd520bd756afc91fc883560b5c634",
          "message": "Changelog",
          "timestamp": "2023-04-25T18:10:04+09:00",
          "tree_id": "edb79ad730cc058ce80548023203bf4275eda639",
          "url": "https://github.com/greymistcube/libplanet/commit/7b2175f813edd520bd756afc91fc883560b5c634"
        },
        "date": 1682414642501,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1314417,
            "unit": "ns",
            "range": "± 121325.85562621985"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2383520,
            "unit": "ns",
            "range": "± 67599.20500450711"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2034832.530120482,
            "unit": "ns",
            "range": "± 105411.11977770046"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4970070,
            "unit": "ns",
            "range": "± 141011.5558972091"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42020.48192771084,
            "unit": "ns",
            "range": "± 2190.4314663590253"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7036993.333333333,
            "unit": "ns",
            "range": "± 52245.96316144116"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18542885.714285713,
            "unit": "ns",
            "range": "± 103800.06563761712"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46906020,
            "unit": "ns",
            "range": "± 308220.906864819"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 94461946.66666667,
            "unit": "ns",
            "range": "± 432192.55772442557"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 183061792.85714287,
            "unit": "ns",
            "range": "± 416456.9484893426"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4859384.735576923,
            "unit": "ns",
            "range": "± 5727.873222974305"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1516049.609375,
            "unit": "ns",
            "range": "± 1057.9171982100659"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1143083.3565848214,
            "unit": "ns",
            "range": "± 2687.6911502655607"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2617901.1848958335,
            "unit": "ns",
            "range": "± 2556.8524603366345"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 797931.1941964285,
            "unit": "ns",
            "range": "± 865.8689365167123"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 735660.5794270834,
            "unit": "ns",
            "range": "± 594.2139803688053"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2982191.6666666665,
            "unit": "ns",
            "range": "± 87448.75193097793"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3188212.1951219514,
            "unit": "ns",
            "range": "± 114580.83433786374"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3972159.090909091,
            "unit": "ns",
            "range": "± 96787.83699210551"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4044411.904761905,
            "unit": "ns",
            "range": "± 84637.70126953161"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6515510.344827586,
            "unit": "ns",
            "range": "± 177893.53225380063"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 266302.77777777775,
            "unit": "ns",
            "range": "± 8334.557529128298"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 248114.63414634147,
            "unit": "ns",
            "range": "± 8915.031154617738"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 233991.83673469388,
            "unit": "ns",
            "range": "± 9283.135172960468"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3918228.5714285714,
            "unit": "ns",
            "range": "± 14660.644784405136"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3540278.5714285714,
            "unit": "ns",
            "range": "± 22532.171139589198"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19617.525773195877,
            "unit": "ns",
            "range": "± 1740.3908989361144"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85910.98901098901,
            "unit": "ns",
            "range": "± 4824.001348568324"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 78602,
            "unit": "ns",
            "range": "± 7606.947648383846"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 90723.1182795699,
            "unit": "ns",
            "range": "± 11052.917574548854"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5971.134020618557,
            "unit": "ns",
            "range": "± 1029.2552690828004"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22234.615384615383,
            "unit": "ns",
            "range": "± 2302.458737809701"
          }
        ]
      }
    ]
  }
}