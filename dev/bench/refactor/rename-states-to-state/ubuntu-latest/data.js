window.BENCHMARK_DATA = {
  "lastUpdate": 1688120404218,
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
          "id": "a6356333b6ce3987cecdc61838d8428a69efb910",
          "message": "General name changes",
          "timestamp": "2023-06-30T18:14:22+09:00",
          "tree_id": "9dd1f5bc211451c44be06e9a7b92b29245266c77",
          "url": "https://github.com/greymistcube/libplanet/commit/a6356333b6ce3987cecdc61838d8428a69efb910"
        },
        "date": 1688117437819,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7772998.73,
            "unit": "ns",
            "range": "± 496672.63057448115"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21545033.61038961,
            "unit": "ns",
            "range": "± 1092357.6465134239"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53738240.428571425,
            "unit": "ns",
            "range": "± 846464.2212157685"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105840684.11764705,
            "unit": "ns",
            "range": "± 4239984.868308002"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 201491662.73076922,
            "unit": "ns",
            "range": "± 5357153.898180604"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48454.857142857145,
            "unit": "ns",
            "range": "± 3963.2070279045156"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 303704.64,
            "unit": "ns",
            "range": "± 28838.541440484547"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 283523.54,
            "unit": "ns",
            "range": "± 35410.006156001735"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 253355.22,
            "unit": "ns",
            "range": "± 25288.241486237483"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4533856.47,
            "unit": "ns",
            "range": "± 334178.82581280544"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4023242.61,
            "unit": "ns",
            "range": "± 310111.0092711798"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18894.916666666668,
            "unit": "ns",
            "range": "± 1568.531097399338"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 91195.70408163265,
            "unit": "ns",
            "range": "± 8074.280070947925"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 86007.69,
            "unit": "ns",
            "range": "± 9226.248707137664"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 99487.09574468085,
            "unit": "ns",
            "range": "± 13932.92967831396"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5236.775510204082,
            "unit": "ns",
            "range": "± 751.9175833677331"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18583.4375,
            "unit": "ns",
            "range": "± 2299.7434081699316"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1519290.5252525252,
            "unit": "ns",
            "range": "± 164356.901837617"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2871532.31,
            "unit": "ns",
            "range": "± 231959.6031641601"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1984801.68,
            "unit": "ns",
            "range": "± 206307.45678733528"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5382522.78,
            "unit": "ns",
            "range": "± 507946.71537903964"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6015877.342447917,
            "unit": "ns",
            "range": "± 198323.58373989986"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1847454.3570149739,
            "unit": "ns",
            "range": "± 46784.15357666108"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1265060.3587239583,
            "unit": "ns",
            "range": "± 21376.87066780891"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2442067.367057292,
            "unit": "ns",
            "range": "± 32169.55298267383"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 806311.9587131076,
            "unit": "ns",
            "range": "± 22397.644177043767"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 746670.4407456341,
            "unit": "ns",
            "range": "± 14777.370239830643"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3445504.88,
            "unit": "ns",
            "range": "± 363099.35588381044"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3540105.72,
            "unit": "ns",
            "range": "± 288562.22996974626"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4303053.07,
            "unit": "ns",
            "range": "± 354568.79853924067"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3962738.74,
            "unit": "ns",
            "range": "± 323520.3487112907"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6768629.5,
            "unit": "ns",
            "range": "± 644856.8612761747"
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
          "id": "1dc7b9a95bf9b254acb5433565384466ede62306",
          "message": "Changelog",
          "timestamp": "2023-06-30T18:18:08+09:00",
          "tree_id": "e0c2208a1d284ce2e66f7cb6f595fa3636823780",
          "url": "https://github.com/greymistcube/libplanet/commit/1dc7b9a95bf9b254acb5433565384466ede62306"
        },
        "date": 1688117483710,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8104759.533333333,
            "unit": "ns",
            "range": "± 114856.28900553861"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21916892,
            "unit": "ns",
            "range": "± 149006.18125936924"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55158427.53333333,
            "unit": "ns",
            "range": "± 676489.9341371149"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 109474581.875,
            "unit": "ns",
            "range": "± 2012853.618779795"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 217981749.26666668,
            "unit": "ns",
            "range": "± 2706992.6948589613"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48362.3875,
            "unit": "ns",
            "range": "± 2319.1701620079757"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 283040.54545454547,
            "unit": "ns",
            "range": "± 7249.62114997617"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 276947.89743589744,
            "unit": "ns",
            "range": "± 9602.266469830174"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 235174.66666666666,
            "unit": "ns",
            "range": "± 4050.324620251044"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4489649.9375,
            "unit": "ns",
            "range": "± 82473.84571807699"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4067061.533333333,
            "unit": "ns",
            "range": "± 67263.45732147653"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18427.926315789475,
            "unit": "ns",
            "range": "± 1281.1130652687293"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 88125.85882352942,
            "unit": "ns",
            "range": "± 4758.256824052422"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 72933,
            "unit": "ns",
            "range": "± 802.564119972147"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 93622.9693877551,
            "unit": "ns",
            "range": "± 13407.672398421104"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4912.556701030928,
            "unit": "ns",
            "range": "± 581.8874098045114"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17174.478260869564,
            "unit": "ns",
            "range": "± 1191.0237860189343"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1489500.191919192,
            "unit": "ns",
            "range": "± 105509.65922177669"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2786202.9215686275,
            "unit": "ns",
            "range": "± 113573.87311293793"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1916024.9743589743,
            "unit": "ns",
            "range": "± 98849.78122672181"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5009411.12195122,
            "unit": "ns",
            "range": "± 180398.30069601475"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6093522.08203125,
            "unit": "ns",
            "range": "± 17930.05068003078"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1902109.763950893,
            "unit": "ns",
            "range": "± 4602.88161657241"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1391192.0750558036,
            "unit": "ns",
            "range": "± 3756.153946847624"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2936660.9424479166,
            "unit": "ns",
            "range": "± 7881.985151663116"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 843526.6629557292,
            "unit": "ns",
            "range": "± 865.321399703442"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 759732.5358072916,
            "unit": "ns",
            "range": "± 717.2794067744198"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3447592.3913043477,
            "unit": "ns",
            "range": "± 84511.3406928535"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3656925.1333333333,
            "unit": "ns",
            "range": "± 63862.30279824897"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4360277.714285715,
            "unit": "ns",
            "range": "± 61980.61491172191"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4018470.785714286,
            "unit": "ns",
            "range": "± 111455.02083546467"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6563589.051282051,
            "unit": "ns",
            "range": "± 226916.48824111815"
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
          "id": "c82a74dc369847e7d30ae0837cfe40ae1cda7629",
          "message": "Changelog",
          "timestamp": "2023-06-30T18:19:04+09:00",
          "tree_id": "df6e9073954b05dadad6934cdb9be172c8db348d",
          "url": "https://github.com/greymistcube/libplanet/commit/c82a74dc369847e7d30ae0837cfe40ae1cda7629"
        },
        "date": 1688117498961,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7887967.4,
            "unit": "ns",
            "range": "± 42872.84434364351"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19850760.4,
            "unit": "ns",
            "range": "± 71303.37424774711"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51992007.53333333,
            "unit": "ns",
            "range": "± 315360.2232544932"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102748555.33333333,
            "unit": "ns",
            "range": "± 457874.4298602069"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 205323335.64285713,
            "unit": "ns",
            "range": "± 718683.3432542946"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48282.256410256414,
            "unit": "ns",
            "range": "± 2493.805465475144"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 289654.4117647059,
            "unit": "ns",
            "range": "± 5811.152586393937"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 272892.73529411765,
            "unit": "ns",
            "range": "± 7269.42808933339"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 243701.32258064515,
            "unit": "ns",
            "range": "± 7238.4229561744405"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4262835.333333333,
            "unit": "ns",
            "range": "± 26669.481399068074"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3941420.5714285714,
            "unit": "ns",
            "range": "± 21522.281126291444"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17354.260416666668,
            "unit": "ns",
            "range": "± 1728.9049363217516"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 89044.62337662338,
            "unit": "ns",
            "range": "± 4332.712335851045"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 73378.41463414633,
            "unit": "ns",
            "range": "± 2642.0111276791563"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 89661.66326530612,
            "unit": "ns",
            "range": "± 13013.557170337668"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4447.443298969072,
            "unit": "ns",
            "range": "± 580.7813337987055"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17320.115789473683,
            "unit": "ns",
            "range": "± 1293.8988159916667"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1400760.9484536082,
            "unit": "ns",
            "range": "± 100256.93200975048"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2691243.3529411764,
            "unit": "ns",
            "range": "± 85752.56277074432"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1823809.4395604397,
            "unit": "ns",
            "range": "± 101960.880158052"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4758853.285714285,
            "unit": "ns",
            "range": "± 79635.72130687292"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5986055.790264423,
            "unit": "ns",
            "range": "± 8437.533447832193"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1924645.04140625,
            "unit": "ns",
            "range": "± 8353.997630423763"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1384494.6243489583,
            "unit": "ns",
            "range": "± 611.9365035849976"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2625485.637019231,
            "unit": "ns",
            "range": "± 1320.3701119592536"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 800437.8792550223,
            "unit": "ns",
            "range": "± 427.2931737002683"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 741251.5966099331,
            "unit": "ns",
            "range": "± 490.2803671872379"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3258029.3125,
            "unit": "ns",
            "range": "± 50725.612056394486"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3509771.466666667,
            "unit": "ns",
            "range": "± 56490.0764507318"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4377856.066666666,
            "unit": "ns",
            "range": "± 62832.900505418416"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3897795.25,
            "unit": "ns",
            "range": "± 72089.39376681334"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6324807.75,
            "unit": "ns",
            "range": "± 119312.3226960792"
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
          "id": "e54abd15c3f660352fdde264eb0a29229b603d34",
          "message": "More renaming",
          "timestamp": "2023-06-30T19:05:43+09:00",
          "tree_id": "78ddfed628b48c2bdd2dbcc2b44146683bc54cbf",
          "url": "https://github.com/greymistcube/libplanet/commit/e54abd15c3f660352fdde264eb0a29229b603d34"
        },
        "date": 1688120397105,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8484699.466666667,
            "unit": "ns",
            "range": "± 98104.82720311158"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22570984.2,
            "unit": "ns",
            "range": "± 164091.06290898356"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57240484.6,
            "unit": "ns",
            "range": "± 198075.21976396456"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 114187299.28571428,
            "unit": "ns",
            "range": "± 300179.63734645717"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 229532325,
            "unit": "ns",
            "range": "± 479981.40554352565"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50625.44680851064,
            "unit": "ns",
            "range": "± 3130.3021792950567"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 299495.8048780488,
            "unit": "ns",
            "range": "± 9374.171371965396"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 283549.243902439,
            "unit": "ns",
            "range": "± 9259.35952909403"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 258348.5625,
            "unit": "ns",
            "range": "± 4943.410698006657"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4651565.214285715,
            "unit": "ns",
            "range": "± 19367.007958335787"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4266680.333333333,
            "unit": "ns",
            "range": "± 37150.3728200225"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21676.09574468085,
            "unit": "ns",
            "range": "± 2003.2203646738578"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 105482.66666666667,
            "unit": "ns",
            "range": "± 5999.290581852762"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 89549.70833333333,
            "unit": "ns",
            "range": "± 3485.7587406799894"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 103742.7951807229,
            "unit": "ns",
            "range": "± 7338.412704291922"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6590.959183673469,
            "unit": "ns",
            "range": "± 713.9883899597144"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22316.21052631579,
            "unit": "ns",
            "range": "± 1470.4749406065534"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1586087.9042553192,
            "unit": "ns",
            "range": "± 115833.4548755673"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3004171,
            "unit": "ns",
            "range": "± 63256.04608628798"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2035759.717647059,
            "unit": "ns",
            "range": "± 108065.65944904709"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5387848.444444444,
            "unit": "ns",
            "range": "± 147866.69313876898"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6212580.28515625,
            "unit": "ns",
            "range": "± 27036.496491872127"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1934340.636328125,
            "unit": "ns",
            "range": "± 2407.998409466723"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1400060.061360677,
            "unit": "ns",
            "range": "± 726.3263290146976"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2672981.6361979167,
            "unit": "ns",
            "range": "± 1130.8692682753954"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 838583.6930106027,
            "unit": "ns",
            "range": "± 272.82591083980486"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 774756.3147536058,
            "unit": "ns",
            "range": "± 217.06714687152655"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3760571.2916666665,
            "unit": "ns",
            "range": "± 86607.39406654716"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3946625.0714285714,
            "unit": "ns",
            "range": "± 66743.02240968056"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4691724.076923077,
            "unit": "ns",
            "range": "± 44728.73360689886"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4389754.235294118,
            "unit": "ns",
            "range": "± 87953.90503733292"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6792432.523809524,
            "unit": "ns",
            "range": "± 148035.98229133993"
          }
        ]
      }
    ]
  }
}