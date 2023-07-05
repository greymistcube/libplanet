window.BENCHMARK_DATA = {
  "lastUpdate": 1688538799016,
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
          "id": "a11fa8c295811e9017e6652a48cb5dbb577ca1c9",
          "message": "Remove early termination for tx evaluation",
          "timestamp": "2023-07-05T14:23:42+09:00",
          "tree_id": "499cc83aa3cb35299f3e9593348bc0dab9f54898",
          "url": "https://github.com/greymistcube/libplanet/commit/a11fa8c295811e9017e6652a48cb5dbb577ca1c9"
        },
        "date": 1688535402960,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7940501.076923077,
            "unit": "ns",
            "range": "± 24036.093538196325"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19912935.14285714,
            "unit": "ns",
            "range": "± 104138.41880206077"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51319529.4,
            "unit": "ns",
            "range": "± 182874.35077545143"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102173976.73333333,
            "unit": "ns",
            "range": "± 220938.62745486153"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 204073418.93333334,
            "unit": "ns",
            "range": "± 409571.57398772315"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47699.15957446808,
            "unit": "ns",
            "range": "± 3859.58484954293"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 292631.65,
            "unit": "ns",
            "range": "± 6622.492075654395"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 277030.2580645161,
            "unit": "ns",
            "range": "± 7464.286681560142"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 251458.32142857142,
            "unit": "ns",
            "range": "± 10809.032929759413"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4306525.461538462,
            "unit": "ns",
            "range": "± 19868.21634594386"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3925134.923076923,
            "unit": "ns",
            "range": "± 26942.31725823875"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19245.1935483871,
            "unit": "ns",
            "range": "± 1308.3970217329538"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 92190.10344827586,
            "unit": "ns",
            "range": "± 5022.04039659061"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 75284.16216216216,
            "unit": "ns",
            "range": "± 2542.299555231155"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 89027.35897435897,
            "unit": "ns",
            "range": "± 3662.354380685136"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5912.265306122449,
            "unit": "ns",
            "range": "± 733.4740039388098"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19784.416666666668,
            "unit": "ns",
            "range": "± 1951.3053426747122"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1436628.3979591837,
            "unit": "ns",
            "range": "± 103088.29809347456"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2671986.3333333335,
            "unit": "ns",
            "range": "± 78740.94730160428"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1866310.6391752576,
            "unit": "ns",
            "range": "± 135736.3051039577"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4881529.944444444,
            "unit": "ns",
            "range": "± 101435.88637945137"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6357574.295758928,
            "unit": "ns",
            "range": "± 15492.778134413194"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1872025.173828125,
            "unit": "ns",
            "range": "± 1150.4852014653939"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1355559.9705729166,
            "unit": "ns",
            "range": "± 998.1935804023407"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2585321.1160714286,
            "unit": "ns",
            "range": "± 2157.967498443401"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 809557.8773018973,
            "unit": "ns",
            "range": "± 650.8291786222228"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 743367.1428571428,
            "unit": "ns",
            "range": "± 555.8400696109227"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3366369.933333333,
            "unit": "ns",
            "range": "± 51692.44707120687"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3497532.6923076925,
            "unit": "ns",
            "range": "± 21944.780326175576"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4390644.636363637,
            "unit": "ns",
            "range": "± 106842.68621203948"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3925415.56,
            "unit": "ns",
            "range": "± 100100.13930313317"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6378559.045454546,
            "unit": "ns",
            "range": "± 138830.01019111287"
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
          "id": "6c3dc5c3571a388ecb2cd52f854ebee6a2d4580d",
          "message": "Remove early termination for tx evaluation",
          "timestamp": "2023-07-05T14:24:36+09:00",
          "tree_id": "0b22b2aba3954c38cd396124f92aa4ed06738e2f",
          "url": "https://github.com/greymistcube/libplanet/commit/6c3dc5c3571a388ecb2cd52f854ebee6a2d4580d"
        },
        "date": 1688535974288,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9204647.305555556,
            "unit": "ns",
            "range": "± 449852.1983762685"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23383926.887755103,
            "unit": "ns",
            "range": "± 1733507.2903853068"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67922288.45,
            "unit": "ns",
            "range": "± 2385613.623145808"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 126564053.01265822,
            "unit": "ns",
            "range": "± 6570432.506906165"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 261950739.8181818,
            "unit": "ns",
            "range": "± 6175086.879863146"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 69882.32989690722,
            "unit": "ns",
            "range": "± 17997.319630712635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 361983,
            "unit": "ns",
            "range": "± 36928.278521963955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 349178.1632653061,
            "unit": "ns",
            "range": "± 48122.028218581734"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 302075.13402061857,
            "unit": "ns",
            "range": "± 42333.48002581922"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4839079.159574468,
            "unit": "ns",
            "range": "± 330161.7269506548"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4405732.292929293,
            "unit": "ns",
            "range": "± 292208.50859834737"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 30890.83,
            "unit": "ns",
            "range": "± 11485.562482371704"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 114006.97916666667,
            "unit": "ns",
            "range": "± 23001.113006012358"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 111720.44210526315,
            "unit": "ns",
            "range": "± 26676.90227068935"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 132684.72916666666,
            "unit": "ns",
            "range": "± 28808.697896908685"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5847.368421052632,
            "unit": "ns",
            "range": "± 1456.4315920962922"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26151.424242424244,
            "unit": "ns",
            "range": "± 10432.028100401645"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1747968.18,
            "unit": "ns",
            "range": "± 166987.6598027883"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3499366.515151515,
            "unit": "ns",
            "range": "± 308559.0949570628"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2447958.84375,
            "unit": "ns",
            "range": "± 243574.63867593475"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7062142.3125,
            "unit": "ns",
            "range": "± 570687.4262497136"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7075027.794270833,
            "unit": "ns",
            "range": "± 108091.55781331415"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2373134.9971354166,
            "unit": "ns",
            "range": "± 36479.49611992088"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1659032.2970052084,
            "unit": "ns",
            "range": "± 28298.828083663364"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3177798.45703125,
            "unit": "ns",
            "range": "± 52434.863663475255"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1043377.9130208333,
            "unit": "ns",
            "range": "± 17584.236925332832"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 926380.0599609375,
            "unit": "ns",
            "range": "± 12131.567421958074"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3744693.6391752576,
            "unit": "ns",
            "range": "± 298202.1702150442"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3988557.5833333335,
            "unit": "ns",
            "range": "± 384367.7109530641"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5503153.989473684,
            "unit": "ns",
            "range": "± 374167.2225710333"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4296907.520833333,
            "unit": "ns",
            "range": "± 345200.0608521925"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8160974.737373738,
            "unit": "ns",
            "range": "± 665070.0006947955"
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
          "id": "d1275d6f8e2ca50a35190a5fa6532b7a36601fbf",
          "message": "Changelog",
          "timestamp": "2023-07-05T15:16:19+09:00",
          "tree_id": "9adbe38ff2d5ed681460dcc83f97cc3ec25c8594",
          "url": "https://github.com/greymistcube/libplanet/commit/d1275d6f8e2ca50a35190a5fa6532b7a36601fbf"
        },
        "date": 1688538790797,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9193179.8,
            "unit": "ns",
            "range": "± 162550.46463272348"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25235923.89285714,
            "unit": "ns",
            "range": "± 700217.5992132381"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 62563613.28571428,
            "unit": "ns",
            "range": "± 968311.6458154947"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 128202003.5,
            "unit": "ns",
            "range": "± 1044912.0148360486"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 242379144.4651163,
            "unit": "ns",
            "range": "± 8846440.475936467"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56121.791666666664,
            "unit": "ns",
            "range": "± 4840.9330438550505"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 324581.0864197531,
            "unit": "ns",
            "range": "± 16429.66655869614"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 315932.1666666667,
            "unit": "ns",
            "range": "± 15546.811149865347"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 275922.75,
            "unit": "ns",
            "range": "± 12556.731894606011"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5113065.206896552,
            "unit": "ns",
            "range": "± 146743.23705428455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4691991.470588235,
            "unit": "ns",
            "range": "± 94996.69640908418"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21178.842105263157,
            "unit": "ns",
            "range": "± 2044.1312273932003"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 101492.86666666667,
            "unit": "ns",
            "range": "± 5446.522562788692"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 88124.71604938271,
            "unit": "ns",
            "range": "± 4501.424305801909"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 104953.80208333333,
            "unit": "ns",
            "range": "± 12540.436497582145"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5390.54255319149,
            "unit": "ns",
            "range": "± 661.0581557370949"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20992.05154639175,
            "unit": "ns",
            "range": "± 2045.6516401215426"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1677560.39,
            "unit": "ns",
            "range": "± 153106.00436516048"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3240056.674698795,
            "unit": "ns",
            "range": "± 172568.8930622618"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2150382.112359551,
            "unit": "ns",
            "range": "± 115834.72444063236"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6148782.58,
            "unit": "ns",
            "range": "± 397812.65861024207"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7045806.773871528,
            "unit": "ns",
            "range": "± 148587.30029427516"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2187340.4762961646,
            "unit": "ns",
            "range": "± 80703.23327544339"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1548149.2109375,
            "unit": "ns",
            "range": "± 31574.29761895822"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2769271.5213341345,
            "unit": "ns",
            "range": "± 17585.3638928397"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 969589.2891845703,
            "unit": "ns",
            "range": "± 18633.09641803866"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 845034.2697383997,
            "unit": "ns",
            "range": "± 26502.743738914545"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4078142.75,
            "unit": "ns",
            "range": "± 104623.1916327018"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4227436.12195122,
            "unit": "ns",
            "range": "± 151573.32496636655"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5058114.088235294,
            "unit": "ns",
            "range": "± 150100.06305681102"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4627712.42,
            "unit": "ns",
            "range": "± 186972.28682392192"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7553587.673913044,
            "unit": "ns",
            "range": "± 284900.4799078719"
          }
        ]
      }
    ]
  }
}