window.BENCHMARK_DATA = {
  "lastUpdate": 1701156913706,
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
          "id": "7c4d1cff60e49dcfaf20f5cde3ca660998a9fede",
          "message": "Update TxInvoice specification",
          "timestamp": "2023-11-28T15:43:22+09:00",
          "tree_id": "135093997f2cdf1d6426d6599a5f96dca0a7c2e9",
          "url": "https://github.com/greymistcube/libplanet/commit/7c4d1cff60e49dcfaf20f5cde3ca660998a9fede"
        },
        "date": 1701154453630,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 194905.33606557376,
            "unit": "ns",
            "range": "± 8748.374519837631"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 190705.26119402985,
            "unit": "ns",
            "range": "± 8391.555400104127"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 165034.92,
            "unit": "ns",
            "range": "± 4326.225230305668"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3087689.2,
            "unit": "ns",
            "range": "± 57290.91322016084"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2835489.4615384615,
            "unit": "ns",
            "range": "± 33617.067013684646"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12213.021505376344,
            "unit": "ns",
            "range": "± 1019.9696497881756"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 64150.25263157895,
            "unit": "ns",
            "range": "± 6095.25124710094"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 62523.833333333336,
            "unit": "ns",
            "range": "± 1630.0533111225072"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 66584.9947368421,
            "unit": "ns",
            "range": "± 9207.349894644974"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3275.875,
            "unit": "ns",
            "range": "± 492.9482144254741"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13108.170103092783,
            "unit": "ns",
            "range": "± 1951.837188616842"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3734631.8873697915,
            "unit": "ns",
            "range": "± 11095.73957594355"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1197340.642578125,
            "unit": "ns",
            "range": "± 2989.295032638015"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 775662.4031700721,
            "unit": "ns",
            "range": "± 3705.4552509139526"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1938760.03125,
            "unit": "ns",
            "range": "± 27511.701915675854"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 620315.4660456731,
            "unit": "ns",
            "range": "± 2350.329894347807"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 590611.782801011,
            "unit": "ns",
            "range": "± 10581.301261588167"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40392.3969072165,
            "unit": "ns",
            "range": "± 5211.137448781647"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2328913.3513513515,
            "unit": "ns",
            "range": "± 38980.143599171264"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2511002.3695652173,
            "unit": "ns",
            "range": "± 50315.81055900308"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3122738.6153846155,
            "unit": "ns",
            "range": "± 40856.543379525836"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2957284.8571428573,
            "unit": "ns",
            "range": "± 81488.16719632289"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6650764.024390244,
            "unit": "ns",
            "range": "± 239218.1700563826"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5596453.571428572,
            "unit": "ns",
            "range": "± 21922.282669832628"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13942411.642857144,
            "unit": "ns",
            "range": "± 79953.62844016057"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36357138.14285714,
            "unit": "ns",
            "range": "± 212942.16710280647"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 73992566.85714285,
            "unit": "ns",
            "range": "± 395196.2673627852"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 148225578.3846154,
            "unit": "ns",
            "range": "± 1624756.883746588"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 947604.2315789474,
            "unit": "ns",
            "range": "± 77570.28740980284"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1871942.8219178081,
            "unit": "ns",
            "range": "± 89295.88234710715"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1345943.1170212766,
            "unit": "ns",
            "range": "± 87928.9151466257"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5217889.045454546,
            "unit": "ns",
            "range": "± 126347.13589173858"
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
          "id": "25cc930a3b730f4cc40eb3c1a97bd4969909cbb1",
          "message": "Changelog",
          "timestamp": "2023-11-28T15:50:14+09:00",
          "tree_id": "1bab440f9769e7163c0f4ee7709407be9007550b",
          "url": "https://github.com/greymistcube/libplanet/commit/25cc930a3b730f4cc40eb3c1a97bd4969909cbb1"
        },
        "date": 1701154883775,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 211051.98529411765,
            "unit": "ns",
            "range": "± 10112.045373051202"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 228586.2857142857,
            "unit": "ns",
            "range": "± 11044.330433896059"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 168862.82432432432,
            "unit": "ns",
            "range": "± 5669.5064749649655"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3223860.4285714286,
            "unit": "ns",
            "range": "± 36214.84916113467"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2876453.533333333,
            "unit": "ns",
            "range": "± 37137.95022974029"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14066.061797752809,
            "unit": "ns",
            "range": "± 1463.1445429362077"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 72536.03260869565,
            "unit": "ns",
            "range": "± 6034.34825354643"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 84133.19,
            "unit": "ns",
            "range": "± 16742.3961964194"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 77500.5625,
            "unit": "ns",
            "range": "± 12467.243785901728"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5775.074468085107,
            "unit": "ns",
            "range": "± 649.3761148062783"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14825.247474747475,
            "unit": "ns",
            "range": "± 2047.8227230324524"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3748730.0481770835,
            "unit": "ns",
            "range": "± 51488.7258693977"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1219926.1669170673,
            "unit": "ns",
            "range": "± 9668.359366358647"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 767414.3246694711,
            "unit": "ns",
            "range": "± 2923.180117478059"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1941681.1157552083,
            "unit": "ns",
            "range": "± 23890.784769202663"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 623218.2313802083,
            "unit": "ns",
            "range": "± 2924.1809014840583"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 582283.9119591346,
            "unit": "ns",
            "range": "± 1148.5011898612852"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41478,
            "unit": "ns",
            "range": "± 4898.1711524991915"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2488221.413043478,
            "unit": "ns",
            "range": "± 94599.97242578318"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2564526.6417910447,
            "unit": "ns",
            "range": "± 120100.95582009348"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3174705.730769231,
            "unit": "ns",
            "range": "± 72542.39889460932"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3037354.690909091,
            "unit": "ns",
            "range": "± 118657.52442137878"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6894585.2727272725,
            "unit": "ns",
            "range": "± 257169.45928637177"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5713318.928571428,
            "unit": "ns",
            "range": "± 75256.5777382889"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14899966.57142857,
            "unit": "ns",
            "range": "± 50743.160884708675"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37066573.06666667,
            "unit": "ns",
            "range": "± 115528.15180754286"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74396357.53846154,
            "unit": "ns",
            "range": "± 190621.1596219123"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 151243863.2142857,
            "unit": "ns",
            "range": "± 432958.90636146953"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 990895.3956043957,
            "unit": "ns",
            "range": "± 81888.19735412682"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1939746.7096774194,
            "unit": "ns",
            "range": "± 88313.46917700756"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1443575.2795698924,
            "unit": "ns",
            "range": "± 109805.37777005888"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5577961.66,
            "unit": "ns",
            "range": "± 223711.26714115776"
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
          "id": "2787f845eec8c31300efa636b56b8a26920658e8",
          "message": "Changelog",
          "timestamp": "2023-11-28T16:07:25+09:00",
          "tree_id": "5b7275b547672067b98b8eb12ed055926dda5dad",
          "url": "https://github.com/greymistcube/libplanet/commit/2787f845eec8c31300efa636b56b8a26920658e8"
        },
        "date": 1701155960636,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 209481.64516129033,
            "unit": "ns",
            "range": "± 14678.845482119441"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 192150.82222222222,
            "unit": "ns",
            "range": "± 6580.7556221596515"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 163541.72222222222,
            "unit": "ns",
            "range": "± 3270.3296749726223"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3079717.214285714,
            "unit": "ns",
            "range": "± 46791.04731829432"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2918705.3846153845,
            "unit": "ns",
            "range": "± 28888.161928197223"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16224.183673469388,
            "unit": "ns",
            "range": "± 3312.9452950164955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 65336.625,
            "unit": "ns",
            "range": "± 5509.650743062242"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 77946.04,
            "unit": "ns",
            "range": "± 26280.960117072424"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 78433.62886597938,
            "unit": "ns",
            "range": "± 18976.110524331853"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4613.111111111111,
            "unit": "ns",
            "range": "± 1672.3097365246917"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15450.104166666666,
            "unit": "ns",
            "range": "± 1939.2426816952989"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3820290.710807292,
            "unit": "ns",
            "range": "± 42230.45893421207"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1226370.4564732143,
            "unit": "ns",
            "range": "± 16162.78950852512"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 771913.7523111979,
            "unit": "ns",
            "range": "± 11626.29768767454"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1950040.774639423,
            "unit": "ns",
            "range": "± 5068.711613207525"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 626592.3835449219,
            "unit": "ns",
            "range": "± 2546.9409401593994"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 571342.3210449219,
            "unit": "ns",
            "range": "± 949.099994048366"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42460.5625,
            "unit": "ns",
            "range": "± 5575.738870674215"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2424449.470588235,
            "unit": "ns",
            "range": "± 98816.64153377264"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2488743.524590164,
            "unit": "ns",
            "range": "± 111832.07478053968"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3136470.346153846,
            "unit": "ns",
            "range": "± 44132.23850136117"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2947049.6052631577,
            "unit": "ns",
            "range": "± 101259.85343006285"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6998263.478494624,
            "unit": "ns",
            "range": "± 405877.53400127485"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5494672.633333334,
            "unit": "ns",
            "range": "± 22979.250099248442"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13892203,
            "unit": "ns",
            "range": "± 125361.14222394557"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36192126.038461536,
            "unit": "ns",
            "range": "± 177913.23526071885"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 73689176.66666667,
            "unit": "ns",
            "range": "± 706314.4112831326"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 151038506.66666666,
            "unit": "ns",
            "range": "± 2231131.7778550247"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 960875.5104166666,
            "unit": "ns",
            "range": "± 86942.59505782745"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1921793.0789473683,
            "unit": "ns",
            "range": "± 126496.83917214783"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1414903.5108695652,
            "unit": "ns",
            "range": "± 113121.1629871763"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6224724.670103093,
            "unit": "ns",
            "range": "± 439845.4427864814"
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
          "distinct": false,
          "id": "036e7abd9c33b20bbb95026fc963dc519670c011",
          "message": "Suggestion",
          "timestamp": "2023-11-28T16:22:14+09:00",
          "tree_id": "adb8379e52873b1928cb552efae42b018cda5b83",
          "url": "https://github.com/greymistcube/libplanet/commit/036e7abd9c33b20bbb95026fc963dc519670c011"
        },
        "date": 1701156907508,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 230742.47422680413,
            "unit": "ns",
            "range": "± 19569.693900951363"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 214419.20618556702,
            "unit": "ns",
            "range": "± 15552.885176429849"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 173462.11764705883,
            "unit": "ns",
            "range": "± 3544.4203842510155"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3183133.769230769,
            "unit": "ns",
            "range": "± 44130.62797376641"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2989551.730769231,
            "unit": "ns",
            "range": "± 40772.173908099474"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17549.616161616163,
            "unit": "ns",
            "range": "± 3968.2238501165853"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 87209.1,
            "unit": "ns",
            "range": "± 23249.516748100417"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 94882.37755102041,
            "unit": "ns",
            "range": "± 17381.38281101351"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 88271.39795918367,
            "unit": "ns",
            "range": "± 26966.875687119038"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6315.717171717171,
            "unit": "ns",
            "range": "± 1973.2917750287206"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16795.81914893617,
            "unit": "ns",
            "range": "± 3985.298205171792"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3689793.9453125,
            "unit": "ns",
            "range": "± 6698.291568806851"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1222469.7843017578,
            "unit": "ns",
            "range": "± 22408.870834999376"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 780302.3701869419,
            "unit": "ns",
            "range": "± 3405.334987599343"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1947250.6959134615,
            "unit": "ns",
            "range": "± 8598.747430767731"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 636573.8417217548,
            "unit": "ns",
            "range": "± 4715.425915005246"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 580050.8835286458,
            "unit": "ns",
            "range": "± 757.9475127499758"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43347.76804123711,
            "unit": "ns",
            "range": "± 6810.131869005095"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2566288.066666667,
            "unit": "ns",
            "range": "± 44920.92934013"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2555602.327586207,
            "unit": "ns",
            "range": "± 108511.18978557133"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3304539.3571428573,
            "unit": "ns",
            "range": "± 91719.71051956962"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3068412.2682926827,
            "unit": "ns",
            "range": "± 99940.50808731774"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6885423.913793104,
            "unit": "ns",
            "range": "± 195665.4599387356"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5834442.357142857,
            "unit": "ns",
            "range": "± 50718.99123694602"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14716621.642857144,
            "unit": "ns",
            "range": "± 202439.01389976387"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 40260430.071428575,
            "unit": "ns",
            "range": "± 391840.99591493723"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76020668,
            "unit": "ns",
            "range": "± 290048.40615600074"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 153064484.92857143,
            "unit": "ns",
            "range": "± 617508.9837478809"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1003321.2808988764,
            "unit": "ns",
            "range": "± 86411.23764368487"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1990522.5862068965,
            "unit": "ns",
            "range": "± 81638.20354923805"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1527657.4897959183,
            "unit": "ns",
            "range": "± 125139.47802692166"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5576174.774193549,
            "unit": "ns",
            "range": "± 166516.07688542863"
          }
        ]
      }
    ]
  }
}