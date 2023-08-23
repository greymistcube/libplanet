window.BENCHMARK_DATA = {
  "lastUpdate": 1692760648141,
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
          "id": "72d80bf51c0bcd6f41f280d72148bd74355e6f3e",
          "message": "Remove clutter",
          "timestamp": "2023-08-23T01:00:48+09:00",
          "tree_id": "14da1eae20fc142705db54b95adc7312a8ddc449",
          "url": "https://github.com/greymistcube/libplanet/commit/72d80bf51c0bcd6f41f280d72148bd74355e6f3e"
        },
        "date": 1692721265142,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1642883.3333333333,
            "unit": "ns",
            "range": "± 134823.5935465733"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3238001.0416666665,
            "unit": "ns",
            "range": "± 227679.9138193755"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2113421.052631579,
            "unit": "ns",
            "range": "± 177719.05086802982"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5720557.731958763,
            "unit": "ns",
            "range": "± 531503.8755806983"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 58756.98924731183,
            "unit": "ns",
            "range": "± 4921.434879343853"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9756068.75,
            "unit": "ns",
            "range": "± 110219.13154408963"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26941234.408602152,
            "unit": "ns",
            "range": "± 1734980.4256817512"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 63018056.25,
            "unit": "ns",
            "range": "± 805669.1413301533"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 132487644.26229508,
            "unit": "ns",
            "range": "± 5902072.149014689"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 258885473.68421054,
            "unit": "ns",
            "range": "± 8824537.54303748"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5613016.3671875,
            "unit": "ns",
            "range": "± 125038.70156413068"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1809767.1530330882,
            "unit": "ns",
            "range": "± 34925.51437006219"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1318596.799045139,
            "unit": "ns",
            "range": "± 27686.072608798862"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3261591.7724609375,
            "unit": "ns",
            "range": "± 63766.062765306146"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1072919.6318655303,
            "unit": "ns",
            "range": "± 33346.107658403926"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 956958.4920247396,
            "unit": "ns",
            "range": "± 24667.541592446254"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4030957.5757575757,
            "unit": "ns",
            "range": "± 116817.47255414916"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4293131.578947368,
            "unit": "ns",
            "range": "± 94351.60631401613"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5020650,
            "unit": "ns",
            "range": "± 50795.35590797826"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4575926.9662921345,
            "unit": "ns",
            "range": "± 244847.97266692066"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7316082.75862069,
            "unit": "ns",
            "range": "± 319833.3645838539"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 313194.5945945946,
            "unit": "ns",
            "range": "± 9752.861288017137"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 296800,
            "unit": "ns",
            "range": "± 12896.038019879186"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 283840.206185567,
            "unit": "ns",
            "range": "± 16449.85853405366"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4961300,
            "unit": "ns",
            "range": "± 119311.73733822949"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4615641.176470588,
            "unit": "ns",
            "range": "± 92854.77275579005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27045.054945054944,
            "unit": "ns",
            "range": "± 2570.182169776373"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 109540.625,
            "unit": "ns",
            "range": "± 9070.989943365144"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 97873.73737373737,
            "unit": "ns",
            "range": "± 10310.382976107003"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 110333.33333333333,
            "unit": "ns",
            "range": "± 19291.53982376549"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6953.763440860215,
            "unit": "ns",
            "range": "± 870.2272491542886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25287.5,
            "unit": "ns",
            "range": "± 2768.706709296827"
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
          "id": "eb95d966fb4b2ecaee383c85106a926bb89ad433",
          "message": "Remove clutter",
          "timestamp": "2023-08-23T02:44:52+09:00",
          "tree_id": "1c2221d703d8ff464fdfc85ea909a5815ba6f6c9",
          "url": "https://github.com/greymistcube/libplanet/commit/eb95d966fb4b2ecaee383c85106a926bb89ad433"
        },
        "date": 1692756679931,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1324191.836734694,
            "unit": "ns",
            "range": "± 112477.94003505654"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2355103.3333333335,
            "unit": "ns",
            "range": "± 53596.16869563136"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1683227,
            "unit": "ns",
            "range": "± 148009.03798161255"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4236449.0566037735,
            "unit": "ns",
            "range": "± 173223.8154512176"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43800,
            "unit": "ns",
            "range": "± 2051.519533020877"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7022273.333333333,
            "unit": "ns",
            "range": "± 26593.029878057107"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17882453.333333332,
            "unit": "ns",
            "range": "± 81594.03748057177"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45831173.333333336,
            "unit": "ns",
            "range": "± 279786.31506068713"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 91002133.33333333,
            "unit": "ns",
            "range": "± 345210.3037418261"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 184303228.57142857,
            "unit": "ns",
            "range": "± 485149.23346972704"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4327173.467548077,
            "unit": "ns",
            "range": "± 3466.467474306615"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1386227.3307291667,
            "unit": "ns",
            "range": "± 1287.4439464682473"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 994348.828125,
            "unit": "ns",
            "range": "± 730.9215271898458"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2556388.18359375,
            "unit": "ns",
            "range": "± 4376.755580460711"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 804898.0794270834,
            "unit": "ns",
            "range": "± 836.5484046545879"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 740212.1442522322,
            "unit": "ns",
            "range": "± 1202.2610599454126"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3121292.8571428573,
            "unit": "ns",
            "range": "± 46200.07433037167"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3127132,
            "unit": "ns",
            "range": "± 67608.9966892967"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3968900,
            "unit": "ns",
            "range": "± 62243.27846672052"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3396255.263157895,
            "unit": "ns",
            "range": "± 115728.6030596805"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5476862.162162162,
            "unit": "ns",
            "range": "± 77395.72322146084"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 247334.88372093023,
            "unit": "ns",
            "range": "± 8395.517049817498"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 232748.97959183675,
            "unit": "ns",
            "range": "± 7070.570534764137"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 206847.36842105264,
            "unit": "ns",
            "range": "± 4207.1854435863825"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3785821.4285714286,
            "unit": "ns",
            "range": "± 17038.606776351193"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3414114.285714286,
            "unit": "ns",
            "range": "± 27605.346671164356"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18905.555555555555,
            "unit": "ns",
            "range": "± 1167.5732165393417"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83138.46153846153,
            "unit": "ns",
            "range": "± 4173.23664508785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 64028,
            "unit": "ns",
            "range": "± 1650.1313079065355"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 78541.83673469388,
            "unit": "ns",
            "range": "± 13475.0603806339"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4394.845360824742,
            "unit": "ns",
            "range": "± 505.46412954263684"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18429.896907216495,
            "unit": "ns",
            "range": "± 1474.7997709049082"
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
          "id": "3b96a2a316b65b789a91e6ea84e1dc99e51684d1",
          "message": "Remove clutter",
          "timestamp": "2023-08-23T11:47:16+09:00",
          "tree_id": "de9d901982dab57d16642ea8d522c2a38d0498c3",
          "url": "https://github.com/greymistcube/libplanet/commit/3b96a2a316b65b789a91e6ea84e1dc99e51684d1"
        },
        "date": 1692760061469,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1618858.3333333333,
            "unit": "ns",
            "range": "± 137700.96713849614"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3100383.695652174,
            "unit": "ns",
            "range": "± 225366.32073683018"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2064490.7216494845,
            "unit": "ns",
            "range": "± 192197.98173718888"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5342558,
            "unit": "ns",
            "range": "± 214243.3940019374"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55508.43373493976,
            "unit": "ns",
            "range": "± 2971.5810368152966"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9475485.10638298,
            "unit": "ns",
            "range": "± 362781.7801251178"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25270857.89473684,
            "unit": "ns",
            "range": "± 505960.12174411694"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 65085575,
            "unit": "ns",
            "range": "± 1213383.0565818858"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 124962936,
            "unit": "ns",
            "range": "± 3297224.521457403"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 252065190,
            "unit": "ns",
            "range": "± 5708454.175850891"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5654019.53125,
            "unit": "ns",
            "range": "± 92196.53980881332"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1832100.8072916667,
            "unit": "ns",
            "range": "± 23172.8408630542"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1338971.9140625,
            "unit": "ns",
            "range": "± 23511.531485485346"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3307672.1454326925,
            "unit": "ns",
            "range": "± 26779.149695487064"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1083070.0492527173,
            "unit": "ns",
            "range": "± 21786.09759253449"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 961553.4114583334,
            "unit": "ns",
            "range": "± 12874.722276010529"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3894534.375,
            "unit": "ns",
            "range": "± 118941.77108683977"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4130200,
            "unit": "ns",
            "range": "± 182887.37202840886"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4957997.5,
            "unit": "ns",
            "range": "± 175923.95426972824"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4445519.565217392,
            "unit": "ns",
            "range": "± 249293.53907388917"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7221472.222222222,
            "unit": "ns",
            "range": "± 236400.90114780032"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 300371.4285714286,
            "unit": "ns",
            "range": "± 6996.652260698887"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 286623.5294117647,
            "unit": "ns",
            "range": "± 8121.056015207569"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 255509.23076923078,
            "unit": "ns",
            "range": "± 11922.296903765586"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5062322.7272727275,
            "unit": "ns",
            "range": "± 123864.95692532475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4488168.75,
            "unit": "ns",
            "range": "± 85621.74738347728"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22512.90322580645,
            "unit": "ns",
            "range": "± 1945.520261616169"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 100510.22727272728,
            "unit": "ns",
            "range": "± 5536.597979728411"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 90831.18279569893,
            "unit": "ns",
            "range": "± 9122.213433899353"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 95078.72340425532,
            "unit": "ns",
            "range": "± 15778.642652147793"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6380,
            "unit": "ns",
            "range": "± 939.8505992636118"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25408.42105263158,
            "unit": "ns",
            "range": "± 2483.719891952338"
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
          "id": "616e6a767c3e5a0a4abb684c6e08963f00effb8c",
          "message": "Remove clutter",
          "timestamp": "2023-08-23T11:49:00+09:00",
          "tree_id": "fb6b704cdc85a2fa1c62418dd8dab57a577844cd",
          "url": "https://github.com/greymistcube/libplanet/commit/616e6a767c3e5a0a4abb684c6e08963f00effb8c"
        },
        "date": 1692760228818,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1489234.3434343433,
            "unit": "ns",
            "range": "± 256070.50095931455"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2732869.696969697,
            "unit": "ns",
            "range": "± 416535.69032827695"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1825560,
            "unit": "ns",
            "range": "± 250781.55001871096"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5111353.608247423,
            "unit": "ns",
            "range": "± 564911.7669051394"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51841.30434782609,
            "unit": "ns",
            "range": "± 12058.14805613686"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7689407.291666667,
            "unit": "ns",
            "range": "± 536355.7774943187"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20753079.591836736,
            "unit": "ns",
            "range": "± 825574.5807162608"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56926587.654320985,
            "unit": "ns",
            "range": "± 2975116.9214159767"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 109945140.84507042,
            "unit": "ns",
            "range": "± 5385381.319158043"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 224338296.62921348,
            "unit": "ns",
            "range": "± 12332680.30710984"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5255208.163060897,
            "unit": "ns",
            "range": "± 181330.39330591576"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1754050.4595588236,
            "unit": "ns",
            "range": "± 54166.33588301414"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1174876.796875,
            "unit": "ns",
            "range": "± 18817.166436839125"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2954221.765625,
            "unit": "ns",
            "range": "± 78155.07366273022"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 994182.12890625,
            "unit": "ns",
            "range": "± 12522.089698118076"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 947263.623046875,
            "unit": "ns",
            "range": "± 17604.006030401295"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3250805.154639175,
            "unit": "ns",
            "range": "± 313526.5639899107"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3521961.4583333335,
            "unit": "ns",
            "range": "± 386074.5432166645"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4476375,
            "unit": "ns",
            "range": "± 432159.60721157544"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3902809.375,
            "unit": "ns",
            "range": "± 355649.3323421186"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6715826.530612245,
            "unit": "ns",
            "range": "± 600309.0045454545"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 297261.61616161617,
            "unit": "ns",
            "range": "± 52645.16317312194"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 265734.7368421053,
            "unit": "ns",
            "range": "± 38774.047496212224"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 220848.91304347827,
            "unit": "ns",
            "range": "± 34488.58544907387"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4158908.0808080807,
            "unit": "ns",
            "range": "± 473041.4286289735"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4173261.7021276597,
            "unit": "ns",
            "range": "± 425025.815308661"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24162,
            "unit": "ns",
            "range": "± 10083.467617437922"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 90248.3870967742,
            "unit": "ns",
            "range": "± 18159.879410292167"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 98132.97872340426,
            "unit": "ns",
            "range": "± 18681.820202688064"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 104527.08333333333,
            "unit": "ns",
            "range": "± 30079.118405217392"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5559.302325581395,
            "unit": "ns",
            "range": "± 903.6368228021365"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21932.98969072165,
            "unit": "ns",
            "range": "± 7897.503846805602"
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
          "id": "8b6c146d65e3dfc0413048f6a32bff13db98615b",
          "message": "Changelog",
          "timestamp": "2023-08-23T11:57:12+09:00",
          "tree_id": "064c577833c8f87055d30a70d16aa75940ca0232",
          "url": "https://github.com/greymistcube/libplanet/commit/8b6c146d65e3dfc0413048f6a32bff13db98615b"
        },
        "date": 1692760358026,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1357352.5252525252,
            "unit": "ns",
            "range": "± 127196.2186123169"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2401958.1395348837,
            "unit": "ns",
            "range": "± 76141.4824444416"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1682687.878787879,
            "unit": "ns",
            "range": "± 137607.24891377563"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4248772.916666667,
            "unit": "ns",
            "range": "± 167361.54485931058"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 44878.02197802198,
            "unit": "ns",
            "range": "± 2516.117034806794"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7005193.333333333,
            "unit": "ns",
            "range": "± 78941.65536889224"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18162064.285714287,
            "unit": "ns",
            "range": "± 37183.611095023225"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46274826.666666664,
            "unit": "ns",
            "range": "± 227060.54090945708"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 93132673.33333333,
            "unit": "ns",
            "range": "± 358019.8706908931"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 185318707.69230768,
            "unit": "ns",
            "range": "± 517694.82236406824"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4329174.765625,
            "unit": "ns",
            "range": "± 16808.055599909978"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1400509.5963541667,
            "unit": "ns",
            "range": "± 1330.5196555856874"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 998947.6337139423,
            "unit": "ns",
            "range": "± 758.0194775573433"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2555009.7135416665,
            "unit": "ns",
            "range": "± 3052.1309972420427"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 802877.01171875,
            "unit": "ns",
            "range": "± 810.0858516037409"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 722060.0167410715,
            "unit": "ns",
            "range": "± 554.0443002063217"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2959217.7419354836,
            "unit": "ns",
            "range": "± 75110.5025372474"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3394893.3333333335,
            "unit": "ns",
            "range": "± 51924.53956968525"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3936972.222222222,
            "unit": "ns",
            "range": "± 79057.8998958846"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3530262.5,
            "unit": "ns",
            "range": "± 66491.41172612696"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5642480,
            "unit": "ns",
            "range": "± 124698.9708591588"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 250032.0754716981,
            "unit": "ns",
            "range": "± 10325.840878124567"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 237966.12903225806,
            "unit": "ns",
            "range": "± 6377.674433741166"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 213912.90322580645,
            "unit": "ns",
            "range": "± 6528.233142052239"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3811340,
            "unit": "ns",
            "range": "± 27582.831098866038"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3476283.3333333335,
            "unit": "ns",
            "range": "± 52141.588373343955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19315.957446808512,
            "unit": "ns",
            "range": "± 1625.5555339233047"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 81163.04347826086,
            "unit": "ns",
            "range": "± 5849.874937919413"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 66668,
            "unit": "ns",
            "range": "± 2696.5919534229324"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 79405.10204081633,
            "unit": "ns",
            "range": "± 12635.389447275684"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4460.2040816326535,
            "unit": "ns",
            "range": "± 610.8536862150787"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18105.154639175256,
            "unit": "ns",
            "range": "± 2151.1804479372777"
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
          "id": "d62088b3376324ec8999cedf12b5f956d1d5eafd",
          "message": "Changelog",
          "timestamp": "2023-08-23T11:59:25+09:00",
          "tree_id": "76851775141843c5fbddb8891588fa37a8495c3b",
          "url": "https://github.com/greymistcube/libplanet/commit/d62088b3376324ec8999cedf12b5f956d1d5eafd"
        },
        "date": 1692760623735,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1437037.7551020407,
            "unit": "ns",
            "range": "± 123743.06063251504"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2704538,
            "unit": "ns",
            "range": "± 107284.35207428901"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1797733,
            "unit": "ns",
            "range": "± 148063.46377158817"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4661643.478260869,
            "unit": "ns",
            "range": "± 178114.1336985597"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 53555.913978494624,
            "unit": "ns",
            "range": "± 4458.588740592393"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8037682.352941177,
            "unit": "ns",
            "range": "± 164152.90598742885"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21583313.333333332,
            "unit": "ns",
            "range": "± 148534.58407612235"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53333786.666666664,
            "unit": "ns",
            "range": "± 274376.406906036"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106854700,
            "unit": "ns",
            "range": "± 890522.0499395685"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 214784353.33333334,
            "unit": "ns",
            "range": "± 1463678.9796686326"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4595111.614583333,
            "unit": "ns",
            "range": "± 25674.173543797675"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1428543.7760416667,
            "unit": "ns",
            "range": "± 4313.487883564685"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1074783.9453125,
            "unit": "ns",
            "range": "± 4138.265221191086"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2691537.109375,
            "unit": "ns",
            "range": "± 8564.578947057298"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 843413.984375,
            "unit": "ns",
            "range": "± 3231.1740802448344"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 773363.8113839285,
            "unit": "ns",
            "range": "± 2855.623708094112"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3495154.5454545454,
            "unit": "ns",
            "range": "± 85575.20848246987"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3744512.5,
            "unit": "ns",
            "range": "± 121225.99193982648"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4433347.368421053,
            "unit": "ns",
            "range": "± 145579.2748407475"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4009500,
            "unit": "ns",
            "range": "± 110646.69152228451"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6246150,
            "unit": "ns",
            "range": "± 171269.02705868808"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 275538.23529411765,
            "unit": "ns",
            "range": "± 8348.725713177317"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 258388.37209302327,
            "unit": "ns",
            "range": "± 9525.559833624719"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 243934.78260869565,
            "unit": "ns",
            "range": "± 11773.285139108451"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4211193.333333333,
            "unit": "ns",
            "range": "± 41298.849286402066"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3871330.769230769,
            "unit": "ns",
            "range": "± 46529.94348831342"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26184.536082474227,
            "unit": "ns",
            "range": "± 1950.605686179379"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 101226,
            "unit": "ns",
            "range": "± 8580.57613850532"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 88179,
            "unit": "ns",
            "range": "± 8324.459457077393"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 99650.51546391753,
            "unit": "ns",
            "range": "± 15167.29708198517"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6856.8421052631575,
            "unit": "ns",
            "range": "± 1017.8881591762747"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25827.083333333332,
            "unit": "ns",
            "range": "± 2486.361923380241"
          }
        ]
      }
    ]
  }
}